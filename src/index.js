import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Step 1.
import { PublicClientApplication } from "@azure/msal-browser";
const pca = new PublicClientApplication({
  auth: {
    clientId: "",
    authority: "",
    redirectUri: "",
  },
});

// Step 2 - Register our app in Azure AD
// - Go to our Tenant
// - Azure Directory Service
// - App Registrations - New Registration - Enter the name
// - Redirect URI - Single - page application(SPA)
// - use default route
// - Register
// - API permissions - User.Read (Allows us to read the user informations)
// - Now we get Client ID , for authority we go to Endpoints in Overview of our app and get the first link without /oauth2/v2/0/authorize
// - For redirectUri we make it dynamic : "/"

// Step 3- Now we need to pass the pca object as a prop to our app

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App msalInstance={pca} />);
