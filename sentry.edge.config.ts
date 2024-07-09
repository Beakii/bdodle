// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4d15b99abbcf7b91ce6c5027d80babbf@o4507547282178048.ingest.us.sentry.io/4507547288403968",

  tracesSampleRate: 1,

  debug: false,
});
