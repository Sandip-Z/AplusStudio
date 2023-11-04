import "./App.css";
import { AboutSection } from "./sections/About";
import { BussinessSection } from "./sections/Bussiness";
import { ClientSection } from "./sections/ClientSection";
import { Copyright } from "./sections/Copyright";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Nav } from "./sections/Nav";
import { NewsLetter } from "./sections/NewsLetter";

function App() {
  return (
    <main className="ml-16">
      <Nav />
      <Header />
      <ClientSection />
      <BussinessSection />
      <AboutSection />
      <NewsLetter />
      <Footer />
      <Copyright />
    </main>
  );
}

export default App;
