import "./App.css";
import { AboutSection } from "./sections/About";
import { BussinessSection } from "./sections/Bussiness";
import { ClientSection } from "./sections/ClientSection";
import { Copyright } from "./sections/Copyright";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Nav } from "./sections/Nav";
import { NewsLetter } from "./sections/NewsLetter";
import { Testomonial } from "./sections/Testomonial";

function App() {
  return (
    <main className="ml-5[x] lg:mr-0 lg:ml-16 px-5 lg:px-0">
      {/* <Nav /> */}
      <Header />
      <ClientSection />
      {/* <BussinessSection /> */}
      {/* <AboutSection /> */}
      {/* <Testomonial /> */}
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
      {/* <Copyright /> */}
    </main>
  );
}

export default App;
