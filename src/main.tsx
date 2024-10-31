import { createRoot } from "react-dom/client";
import { App } from "./app";
import { ThemeProvider } from "~/contexts/theme.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
