import React from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter } from 'react-router-dom'
import { store } from "./store/store";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <ThirdwebProvider activeChain={Sepolia}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </ThirdwebProvider>
    </Provider>

  </React.StrictMode>
);
