import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";


export default function Home() {
  return (
    <Routes>
      <Route element={<Landing />} path="/"  />
    </Routes>
  );
}
