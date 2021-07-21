# Sample: Cache requests with regular cache update using Microsoft Graph JS SDK

This repo contains a sample app showing how to cache requests in [Microsoft Graph JS SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript) in such a way that the SDK returns the data from the cache when possible, but in parallel also refreshes the cache.

The sample app uses a custom [middleware](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/master/docs/CustomMiddlewareChain.md) that facilitates caching requests and keeping the cache up-to-date.

## Run the sample

- register a new Azure AD app
  - multi-tenant
  - single-page application
  - redirect URI: `http://localhost`
  - API Permissions: Microsoft Graph User.Read
  - copy the application (client) ID
- in the `env.js` file, update the `clientId` property with the ID of the Azure AD app
- using the VSCode Live Server extension start the app
