import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function NotAnAdmin() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto space-y-6 text-center">
            <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Not an Admin
            </h3>
            <p className="text-gray-600 font-semibold">
              It seems you don't own any shop or you are apart of the apointly
              family. Go back and give us a call or an email to fix that.
            </p>
            <a
              href="/"
              className="text-white duration-150 hover:bg-primary font-medium inline-flex items-center gap-x-1 bg-dark-primary px-5 py-2 rounded-lg"
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

export default NotAnAdmin;
