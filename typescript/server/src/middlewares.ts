import { ServerMiddlewareCall } from 'nice-grpc';
import { CallContext } from 'nice-grpc-common';

export async function* metadataMiddleware<Request, Response>(
  call: ServerMiddlewareCall<Request, Response>,
  context: CallContext,
) {
  const { path } = call.method;
  const hasToken = context.metadata.has("token");
  const token = context.metadata.get("token");
  const hasCorrelationId = context.metadata.has("correlation_id");
  const correlationId = context.metadata.get("correlation_id");
  console.log(
    `Client calling '${path}'.`,
    `Incoming metadata has "token"?: '${hasToken}'.`,
    hasToken ? `Token: '${context.metadata.get('token')}'.` : "",
    `Incoming metadata has "correlation_id"?: '${hasCorrelationId}'`,
    hasCorrelationId ? `correlation_id: '${correlationId}'.`: "",
  );

  if (!call.responseStream) {
    return yield* call.next(call.request, context);
  } else {
    for await (const response of call.next(call.request, context)) {
      yield response;
    }
  }
  return;
}
