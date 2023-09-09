// src/AuthContext.tsx

import React from "react";
import { PublicClientApplication, Configuration } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { loginRequest, msalConfig } from "./msalConfig";

const msalInstance = new PublicClientApplication(msalConfig as Configuration);

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

const useAuth = () => {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = accounts.length > 0;

  const signIn = async () => {
    if (!isAuthenticated) {
      try {
        await instance.loginPopup(loginRequest);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const signOut = () => {
    if (isAuthenticated) {
      instance.logout();
    }
  };

  return {
    isAuthenticated,
    accounts,
    inProgress,
    signIn,
    signOut,
  };
};

export { AuthProvider, useAuth };
