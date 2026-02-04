import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Portfolio />
      <Technologies />
      <Services />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
