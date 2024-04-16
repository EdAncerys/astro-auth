import type { APIRoute, APIContext } from 'astro';

export const GET: APIRoute = async ({
  params,
  request,
  url,
}: APIContext): Promise<Response> => {
  const response: any = {
    message: 'This is a GET request',
    params: params,
    url,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'foo', // custom header example
    },
  });
};

export const POST: APIRoute = async ({
  params,
  request,
}: APIContext): Promise<Response> => {
  const response: any = {
    message: 'This is a POST request',
    params: params,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'foo', // custom header example
    },
  });
};
