// https://developers.cloudflare.com/workers/runtime-apis/fetch-event
export interface FetchEvent {
  type: 'fetch';
  request: Request;
  respondWith(response: Response | Promise<unknown>): void;
  passThroughOnException(): void;
  waitUntil(promise: Promise<unknown>): void;
}

// https://flareact.com/docs/data-fetching#fetching-data-using-code-getedgeprops-code-
export interface GetEdgeProps {
  params: Record<string, unknown>;
  query: Record<string, unknown>;
  event: FetchEvent;
}

export interface EdgeProps<P = Record<string, unknown>> {
  props: P;
  revalidate?: number;
  notFound?: boolean;
}
