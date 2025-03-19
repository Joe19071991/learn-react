import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./components/App.jsx";
// import { Count } from "./components/Count.jsx";
import { List } from "./components/List.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Count /> */}
    <List />
  </StrictMode>
);
