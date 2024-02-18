import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import img from "../assets/images/failed.png";

function FailedAppoint() {
  return (
    <>
      <NavBar />
      <main className="w-screen flex flex-col items-center justify-center my-unit-3xl sm:px-4">
        <div className="bg-white shadow-lg py-6 space-y-8 sm:p-6 sm:rounded-lg xsm:w-unit-8xl lg:w-auto p-unit-lg my-10">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-items-center gap-x-10">
            <div className="p-3 space-y-5 my-10 text-center">
              <h3 className="text-gray-800 text-3xl font-semibold">Failed!</h3>
              <p className="text-gray-600 font-semibold">
                Your appointment has not been booked. <br />
                Something went wrong.
              </p>
              <a
                href="/"
                className="text-white duration-150 hover:bg-primary font-medium inline-flex items-center gap-x-1 bg-dark-primary px-5 py-2 rounded-lg"
              >
                Try again
              </a>
            </div>

            <div className="p-0 m-0">
              <div className="flex   xsm:hidden sm:hidden lg:inline ">
                <img src={img} alt="hehe" className="w-auto h-auto" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FailedAppoint;
