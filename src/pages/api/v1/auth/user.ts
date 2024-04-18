import type { APIRoute, APIContext } from 'astro';
import { constants } from '@clerk/clerk-sdk-node';

const CLERK_SECRET_KEY = import.meta.env.CLERK_SECRET_KEY;

// --------------------------------------------------------------------------------
// 📌  Clerk Backend API
// 📌  https://clerk.com/docs/reference/backend-api
// --------------------------------------------------------------------------------

export const GET: APIRoute = async ({
  params,
  request,
  url,
}: APIContext): Promise<Response> => {
  // get cookies
  const cookies = request.headers.get('cookie');
  const sessionKey = constants?.Cookies?.Session;
  const sessionCookie = cookies
    ?.split(';')
    .find((cookie) => cookie.trim().startsWith(sessionKey));
  const jwt = sessionCookie?.split('=')[1];

  const res = await fetch(`https://api.clerk.com/v1/clients/verify`, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${CLERK_SECRET_KEY}`,
    },
  });
  const data = await res.json();

  const response: any = {
    message: 'This is a GET request',
    params: params,
    url,
    data,
  };

  // return new Response(null, {
  //   status: 302,
  //   headers: {
  //     Location: '/dashboard',
  //   },
  // });

  return new Response(JSON.stringify(response), {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'foo', // custom header example
    },
  });
};
