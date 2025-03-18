import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Text } from "./Text.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Text />
    <Text />
    <Text />
    <Text />
    <Text />
  </StrictMode>
);
