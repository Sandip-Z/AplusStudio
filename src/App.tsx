import "./App.css";
import { ClientSection } from "./sections/ClientSection";
import { Nav } from "./sections/Nav";
import { NewsLetter } from "./sections/NewsLetter";

function App() {
  return (
    <main className="ml-16">
      <Nav />
      <ClientSection />
      <NewsLetter />
    </main>
  );
}

export default App;
