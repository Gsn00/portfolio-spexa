import { useState } from "react";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import { VideoModal } from "./components/VideoModal";
import "./index.css";

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openVideo = (src: string) => {
    setVideoSrc(src);
    setIsVideoOpen(true);
  };

  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Portfolio openVideo={openVideo} />
      <Technologies />
      <Services />
      <CTA />
      <Footer />
      {isVideoOpen && (
        <VideoModal src={videoSrc} onClose={() => setIsVideoOpen(false)} />
      )}
    </>
  );
}

export default App;
