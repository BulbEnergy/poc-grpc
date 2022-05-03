from contextvars import ContextVar
from typing import Union

from grpclib.client import Channel
from grpclib.events import (
    SendRequest,
    RecvInitialMetadata,
    RecvTrailingMetadata,
    listen,
)
from multidict import MultiDict

# gRPC requests and responses can have arbitrary metadata (think HTTP request
# headers and response headers).
# Because betterproto abstracts away the grpclib.client.Stream, if we want this
# metadata to be settable/gettable we need to hook into grpclib's events.
# We use ContextVars so that async threads won't interfere with one another.

Value = Union[str, bytes]

# we can send metadata, e.g. a correlation ID or trace ID
metadata_to_send: ContextVar[MultiDict[Value]] = ContextVar(
    "metadata_to_send", default=MultiDict()
)
# the server _may_ send back metadata before it even acks the request body
# (i.e. in response to receiving the client's metadata)
initial_metadata: ContextVar[MultiDict[Value]] = ContextVar("initial_metadata")
# the server _may_ send metadata once it has finished sending its response
# (in the same message as it sends the status e.g. OK)
trailing_metadata: ContextVar[MultiDict[Value]] = ContextVar("trailing_metadata")


async def send_request(event: SendRequest) -> None:
    metadata = metadata_to_send.get()
    if metadata:
        print(f"Attaching metadata {metadata} to {event.method_name} request")
        event.metadata.extend(metadata)


async def recv_initial_metadata(event: RecvInitialMetadata) -> None:
    initial_metadata.set(event.metadata)
    if event.metadata:
        print(f"Received initial metadata {event.metadata}")


async def recv_trailing_metadata(event: RecvTrailingMetadata) -> None:
    trailing_metadata.set(event.metadata)
    if event.metadata:
        print(f"Received trailing metadata {event.metadata}")


def listen_for_metadata(channel: Channel) -> None:
    listen(channel, SendRequest, send_request)
    listen(channel, RecvInitialMetadata, recv_initial_metadata)
    listen(channel, RecvTrailingMetadata, recv_trailing_metadata)
