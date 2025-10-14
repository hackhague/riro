import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import Home from "./pages/Home";
import Diensten from "./pages/Diensten";
import Computerhulp from "./pages/Computerhulp";
import IkBenGehackt from "./pages/IkBenGehackt";
import HulpOpAfstand from "./pages/HulpOpAfstand";
import WiFi from "./pages/WiFi";
import CyberAPK from "./pages/CyberAPK";
import Tarieven from "./pages/Tarieven";
import Werkgebied from "./pages/Werkgebied";
import ComputerhulpDenHaag from "./pages/ComputerhulpDenHaag";
import ComputerhulpDelft from "./pages/ComputerhulpDelft";
import ComputerhulpZoetermeer from "./pages/ComputerhulpZoetermeer";
import ComputerhulpRijswijk from "./pages/ComputerhulpRijswijk";
import ComputerhulpVoorburg from "./pages/ComputerhulpVoorburg";
import ComputerhulpLeiden from "./pages/ComputerhulpLeiden";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Zakelijk from "./pages/Zakelijk";
import Expat from "./pages/Expat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
            <Route path="/hulp-op-afstand" element={<HulpOpAfstand />} />
            <Route path="/tarieven" element={<Tarieven />} />
            <Route path="/werkgebied" element={<Werkgebied />} />
            <Route path="/computerhulp-den-haag" element={<ComputerhulpDenHaag />} />
            <Route path="/computerhulp-delft" element={<ComputerhulpDelft />} />
            <Route path="/computerhulp-zoetermeer" element={<ComputerhulpZoetermeer />} />
            <Route path="/computerhulp-rijswijk" element={<ComputerhulpRijswijk />} />
            <Route path="/computerhulp-voorburg" element={<ComputerhulpVoorburg />} />
            <Route path="/computerhulp-leiden" element={<ComputerhulpLeiden />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/zakelijk" element={<Zakelijk />} />
            <Route path="/expat" element={<Expat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <MobileCTABar />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
