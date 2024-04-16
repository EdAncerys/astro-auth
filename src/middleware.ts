import { clerkMiddleware, createRouteMatcher } from 'astro-clerk-auth/server';

// --------------------------------------------------------------------------------
// 📌  Clerk Middleware Definitions
// --------------------------------------------------------------------------------
const isProtectedPage = createRouteMatcher(['/dashboard(.*)']);

export const onRequest = clerkMiddleware((auth, context, next) => {
  console.log('onRequest', context.request.url, auth());

  if (isProtectedPage(context.request) && !auth().userId) {
    return auth().redirectToSignIn();
  }

  return next();
});
