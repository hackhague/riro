import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import Home from "./pages/Home";
import Diensten from "./pages/Diensten";
import Computerhulp from "./pages/Computerhulp";
import IkBenGehackt from "./pages/IkBenGehackt";
import WiFi from "./pages/WiFi";
import CyberAPK from "./pages/CyberAPK";
import Tarieven from "./pages/Tarieven";
import Werkgebied from "./pages/Werkgebied";
import ComputerhulpDenHaag from "./pages/ComputerhulpDenHaag";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/computerhulp" element={<Computerhulp />} />
          <Route path="/ik-ben-gehackt" element={<IkBenGehackt />} />
          <Route path="/wifi" element={<WiFi />} />
          <Route path="/cyber-apk" element={<CyberAPK />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/werkgebied" element={<Werkgebied />} />
          <Route path="/computerhulp-den-haag" element={<ComputerhulpDenHaag />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileCTABar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
