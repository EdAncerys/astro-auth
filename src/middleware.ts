import { clerkMiddleware, createRouteMatcher } from 'astro-clerk-auth/server';

// --------------------------------------------------------------------------------
// 📌  Clerk Middleware Definitions
// --------------------------------------------------------------------------------
const isProtectedPage = createRouteMatcher(['/dashboard(.*)']);
const isProtectedAPI = createRouteMatcher(['/api/v1(.*)']);

export const onRequest = clerkMiddleware((auth, context, next) => {
  console.log('onRequest', context.request.url, auth());

  if (isProtectedPage(context.request) && !auth().userId) {
    return auth().redirectToSignIn();
  }

  if (isProtectedAPI(context.request) && !auth().userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  return next();
});
