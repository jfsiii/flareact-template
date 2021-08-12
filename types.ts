// https://developers.cloudflare.com/workers/runtime-apis/fetch-event
export interface FetchEvent {
  type: 'fetch';
  request: Request;
  respondWith(response: Response | Promise<unknown>): void;
  passThroughOnException(): void;
  waitUntil(promise: Promise<unknown>): void;
}

type SomeObject = Record<string, unknown>
// https://flareact.com/docs/data-fetching#fetching-data-using-code-getedgeprops-code-
export interface GetEdgeProps<P = SomeObject, Q = SomeObject> {
  params: P;
  query: P & Q;
  event: FetchEvent;
}

export interface EdgeProps<P = SomeObject> {
  props: P;
  revalidate?: number;
  notFound?: boolean;
}
