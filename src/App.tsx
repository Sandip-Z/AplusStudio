import "./App.css";
import { ClientSection } from "./sections/ClientSection";
import { Header } from "./sections/Header";
import { Nav } from "./sections/Nav";
import { NewsLetter } from "./sections/NewsLetter";

function App() {
  return (
    <main className="ml-16">
      <Nav />
      <Header />
      <ClientSection />
      <NewsLetter />
    </main>
  );
}

export default App;
