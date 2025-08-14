import { useState } from "react";
import type { Property } from "./data/site";
import { ScheduleContext } from "./lib/scheduleContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import FeaturedProperties from "./components/FeaturedProperties";
import PropertyModal from "./components/PropertyModal";
import Developments from "./components/Developments";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import ClientJourney from "./components/ClientJourney";
import Testimonials from "./components/Testimonials";
import ScheduleInspection from "./components/ScheduleInspection";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyMobileCTA from "./components/StickyMobileCTA";
import InspectionModal from "./components/InspectionModal";

export default function App() {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);
  const [inspectionOpen, setInspectionOpen] = useState(false);

  return (
    <ScheduleContext.Provider value={() => setInspectionOpen(true)}>
      <div className="min-h-screen bg-ivory pb-16 sm:pb-0">
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <FeaturedProperties onView={setActiveProperty} />
          <Developments />
          <Services />
          <WhyUs />
          <About />
          <ClientJourney />
          <Testimonials />
          <ScheduleInspection />
          <Contact />
          <MapSection />
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
        <PropertyModal property={activeProperty} onClose={() => setActiveProperty(null)} />
        <InspectionModal open={inspectionOpen} onClose={() => setInspectionOpen(false)} />
      </div>
    </ScheduleContext.Provider>
  );
}
