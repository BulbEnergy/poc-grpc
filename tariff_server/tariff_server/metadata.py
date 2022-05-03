from contextvars import ContextVar
from typing import Union

from grpclib.server import Server
from grpclib.events import (
    listen,
    RecvRequest,
    SendInitialMetadata,
    SendTrailingMetadata,
)
from multidict import MultiDict

# gRPC requests and responses can have arbitrary metadata (think HTTP request
# headers and response headers).
# Because betterproto abstracts away the grpclib.server.Stream, if we want this
# metadata to be settable/gettable we need to hook into grpclib's events.
# We use ContextVars so that async threads won't interfere with one another.

Value = Union[str, bytes]

# we can send metadata, e.g. a correlation ID or trace ID
received_metadata: ContextVar[MultiDict[Value]] = ContextVar("metadata_to_send")
# the server _may_ send back metadata before it even acks the request body
# (i.e. in response to receiving the client's metadata)
initial_metadata_to_send: ContextVar[MultiDict[Value]] = ContextVar(
    "initial_metadata", default=MultiDict()
)
# the server _may_ send metadata once it has finished sending its response
# (in the same message as it sends the status e.g. OK)
trailing_metadata_to_send: ContextVar[MultiDict[Value]] = ContextVar(
    "trailing_metadata", default=MultiDict()
)


async def recv_request(event: RecvRequest) -> None:
    received_metadata.set(event.metadata)
    if event.metadata:
        print(f"Received client metadata {event.metadata}")


async def send_initial_metadata(event: SendInitialMetadata) -> None:
    metadata = initial_metadata_to_send.get()
    if metadata:
        print(f"Attaching initial metadata {metadata} to response")
        event.metadata.extend(metadata)


async def send_trailing_metadata(event: SendTrailingMetadata) -> None:
    metadata = trailing_metadata_to_send.get()
    if metadata:
        print(f"Attaching trailing metadata {metadata} to {event.status} response")
        event.metadata.extend(metadata)


def listen_for_metadata(server: Server) -> None:
    listen(server, RecvRequest, recv_request)
    listen(server, SendInitialMetadata, send_initial_metadata)
    listen(server, SendTrailingMetadata, send_trailing_metadata)
