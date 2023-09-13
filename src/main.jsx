import React from "react";
import ReactDOM from "react-dom/client";
import App from "./view/App.jsx";
import "./index.css";
import "./styles.scss";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#4b1717" highlightColor="#300404">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>
);
