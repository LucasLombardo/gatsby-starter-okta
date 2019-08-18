# Gatsby Starter Okta

** Note this project is still under development and not ready to be released. **

This repo contains an example Gatsby web app integrated with Okta's OIDC Authentication. This project was based on the gatsby default starter and will attempt to provide a minimal framework for authenticated sites, to get you up and running without having to clean up bloat.

## Okta setup

1. Create a free Okta development account, you will be given a custom url similar to dev-12345.okta.com
2. Once you are in the Okta admin panel, select the "Applications" tab and then add a new application.
3. Select Single Page App, under the settings add `http://localhost:8000/` as both the base URI and redirect URI, you will need to add in additional URIs for production later on.
4. Copy and paste both the client ID and URL into the .env files
