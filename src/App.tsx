import "./App.css";
import { ClientSection } from "./sections/ClientSection";
import { Header } from "./sections/Header";
import { NewsLetter } from "./sections/NewsLetter";

function App() {
  return (
    <main className="ml-16">
      <Header />
      <ClientSection />
      <NewsLetter />
    </main>
  );
}

export default App;
