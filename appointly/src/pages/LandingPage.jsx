import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Home from "../components/Home";
import Partneship from "../components/Partneship";
// import TestNav from "../components/TestNav";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <hr className="my-4 mx-5 bg-divider w-auto h-1 rounded-md" />
        <Service />
        <div>
          {/*
        //TODO MAKE ABOUT US SECTION !
        */}
        </div>
        <Partneship />
        <Footer />
      </main>
    </>
  );
}
