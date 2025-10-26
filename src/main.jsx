import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { HashRouter as Router } from "react-router-dom";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AlertProvider from "./context/AlertContext.jsx";
import ToestProvider from "./context/ToestContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AlertProvider>
        <ToestProvider>
          <App />
        </ToestProvider>
      </AlertProvider>
    </Router>
  </StrictMode>
);
