import "./App.css";
import { AboutSection } from "./sections/About";
import { BussinessSection } from "./sections/Bussiness";
import { ClientSection } from "./sections/ClientSection";
import { Copyright } from "./sections/Copyright";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Nav } from "./sections/Nav";
import { NewsLetter } from "./sections/NewsLetter";
import { Testimonial } from "./sections/Testimonial";

function App() {
  return (
    <>
      <Nav />
      <main className="lg:ml-16">
        <Header />
        <ClientSection />
        <BussinessSection />
        <AboutSection />
        <Testimonial />
        <NewsLetter />
        <Footer />
        <Copyright />
      </main>
    </>
  );
}

export default App;
