import React from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter } from 'react-router-dom'


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider  activeChain={ Sepolia }>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
