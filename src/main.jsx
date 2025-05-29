import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BorwserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BorwserRouter>
  </StrictMode>
);
