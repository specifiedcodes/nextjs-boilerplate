// sentry.server.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // Use the same DSN here
  tracesSampleRate: 1.0,
});