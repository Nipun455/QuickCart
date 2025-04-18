// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Apply middleware to all routes except:
     * - Static files (`/_next/`, `favicon.ico`, etc.)
     */
    "/((?!_next|favicon.ico).*)",
    "/(api|trpc)(.*)", // Apply to API and TRPC routes
  ],
};
