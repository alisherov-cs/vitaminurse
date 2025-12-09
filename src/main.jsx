import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Vitaminurse from "./components/vitaminurse";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Vitaminurse />
  </StrictMode>
);
