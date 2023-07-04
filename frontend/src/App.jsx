import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import CreateCampaign from "./pages/CreateCampaign";
import MyCampaign from "./pages/MyCampaign";
import DetailOfampaign from "./pages/DetailOfampaign";

export default function Home() {
  return (
    <Routes>
      <Route element={<Landing />} path="/"  />
      <Route element={<CreateCampaign />} path="/create-campaign"  />
      <Route element={<MyCampaign />} path="/my-campaign"  />
      <Route element={<DetailOfampaign />} path="/detail-of-campaign/:id"  />
    </Routes>
  );
}
