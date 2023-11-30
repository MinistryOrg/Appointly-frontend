import NavBar from "../components/Navbar";
import background from "../../src/styles/images/lp.png";

const divBgImg = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "800px",
};

export default function LandingPage() {
  return (
    <>
      <NavBar />

      <div style={divBgImg }>

        
      </div>

    </>
  );
}
