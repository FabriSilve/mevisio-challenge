import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ContextProvider from "./ContextProvider.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
