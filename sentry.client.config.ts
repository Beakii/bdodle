import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4d15b99abbcf7b91ce6c5027d80babbf@o4507547282178048.ingest.us.sentry.io/4507547288403968",

  tracesSampleRate: 1,

  debug: false,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      showBranding: false,
      themeDark: {
        background: "#222222"
      }
    }),
  ],
});
