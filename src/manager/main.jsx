import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import StudentManager from "./StudentManager.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentManager />
  </StrictMode>
);
