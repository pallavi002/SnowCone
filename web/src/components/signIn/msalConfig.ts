export const msalConfig = {
  auth: {
    clientId: '24092654-4384-4ae7-89a0-5ac2311b73a8', // Replace with your Application Client ID
    redirectUri: 'http://localhost:3000', // Replace with your redirect URI
    authority: 'https://login.microsoftonline.com/405ddc34-d660-46e5-b52d-bfd0be156bb5', // Replace with your Azure AD tenant ID
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
};
