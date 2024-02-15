import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Home from "../components/Home";
import Partneship from "../components/Partneship";
import About from "../components/About";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <hr className="my-4 mx-5 bg-divider w-auto h-1 rounded-md" />
        <Service />
        <hr className="my-4 mx-5 bg-divider w-auto h-1 rounded-md opacity-60" />
        <About />
        <Partneship />
        <Footer />
      </main>
    </>
  );
}
