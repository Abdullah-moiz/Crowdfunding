import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import CreateCampaign from "./pages/CreateCampaign";


export default function Home() {
  return (
    <Routes>
      <Route element={<Landing />} path="/"  />
      <Route element={<CreateCampaign />} path="/create-campaign"  />
    </Routes>
  );
}
