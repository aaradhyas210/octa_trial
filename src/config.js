const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit Flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://dev-5018897.okta.com/oauth2/default',
    clientId: '0oa5sj0wySRNe2G795d6',
    redirectUri: "http://localhost:3000/implicit/callback",
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-5018897.okta.com',
    clientId: '0oa5sj0wySRNe2G795d6',
    redirectUri: "http://localhost:3000/implicit/callback",
    authParams: {
        // If your app is configured to use the Implicit Flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
    }
};

export { oktaAuthConfig, oktaSignInConfig };