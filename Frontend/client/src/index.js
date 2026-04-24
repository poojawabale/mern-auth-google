import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="500646793127-7j6fnde8lon64cjdb26d75p9cmif48vn.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);