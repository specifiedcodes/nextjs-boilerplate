// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // Set your DSN in your environment variables
  tracesSampleRate: 1.0, // Adjust this value in production as needed
});