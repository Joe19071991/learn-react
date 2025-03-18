import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./components/App.jsx";
import { Count } from "./components/Count.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Count />
  </StrictMode>
);
