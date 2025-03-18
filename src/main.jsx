import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Text } from "./Text.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Text msg={"React"} />
    <Text msg={"Js"} />
    <Text msg={"HTML"} />
    <Text msg={"CSS"} />
    <Text msg={"JavaScript"} />
  </StrictMode>
);
