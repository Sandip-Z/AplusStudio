import { useState } from "react";
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
  const [playEmbededVideo, setPlayEmbededVideo] = useState(false);
  return (
    <>
      <Nav />
      <main className="lg:ml-16">
        <Header />
        <ClientSection />
        <BussinessSection />
        <AboutSection setPlay={setPlayEmbededVideo} />
        <Testimonial />
        <NewsLetter />
        <Footer />
        <Copyright />
      </main>
      {playEmbededVideo && (
        <div className="fixed w-[100vw] h-[100vh] top-0 left-0 z-[1000] bg-black bg-opacity-[50%] flex">
          <div className="m-auto">
            <div>
              <p
                className="text-2xl text-right text-white cursor-pointer"
                onClick={() => setPlayEmbededVideo(false)}
              >
                x
              </p>
            </div>
            <iframe
              className="h-64 sm:w-[700px] sm:h-[500px] relative sm:top-[25%][x] sm:left-[30%][x] self-center"
              src="https://www.youtube.com/embed/2FHOuPO8Ecw"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
