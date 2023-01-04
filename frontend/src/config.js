const config = {
  SENTRY_DSN: "https://d2e734592e0e4888b5c07b84e07dec38@o4504447306170368.ingest.sentry.io/4504447310626816",
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51M2wHpBkVoXtDd1x3NANFmSXhx0wHHKoTtRncxZVDbbJh9HP2Gdol0kAWqHn2ZrWYuL7PGMOd4qVnKvz0Cvz2ddH00IfgyPnrv",
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;