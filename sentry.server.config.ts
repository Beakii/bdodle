import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4d15b99abbcf7b91ce6c5027d80babbf@o4507547282178048.ingest.us.sentry.io/4507547288403968",

  tracesSampleRate: 1,

  debug: false,

  // spotlight: process.env.NODE_ENV === 'development', leave uncommented 

});
