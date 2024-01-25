import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Page not found
            </h3>
            <p className="text-gray-600">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <a
              href="/"
              className="text-white duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1 bg-primary px-5 py-2 rounded-lg"
            >
              Go back
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
