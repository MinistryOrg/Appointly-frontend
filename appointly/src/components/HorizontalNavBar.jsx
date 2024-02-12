import { Link, useNavigate } from "react-router-dom";
import logo from "../../src/styles/images/apoinlty_logo.webp";
import { useAuth } from "../contexts/AuthContext";
import { UserIcon } from "../assets/UserIcon";

function HorizontalNavBar() {
  const { loggedIn, changeLoggedIn, lastname, firstname } = useAuth();
  const navigate = useNavigate();

  function logout() {
    changeLoggedIn(false);
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <nav className="bg-primary px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-white hover:text-gray-400 rounded-lg cursor-pointer md:hidden "
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a href="/" className="flex items-center justify-between mr-4">
              <img src={logo} className="h-5 px-6" alt="Flowbite Logo" />
            </a>
          </div>
          <div className="flex items-center lg:order-2 px-9 space-x-4">
            <p className="text-white font-semibold">
              {lastname} {firstname}
            </p>
            <a
              href="/editProfile"
              className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-4 hover:text-gray-100 text-white"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <UserIcon />
            </a>
            <Link
              to="#"
              className="flex items-center p-2 text-white rounded-lg  hover:text-gray-300  group"
              onClick={() => {
                logout();
              }}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HorizontalNavBar;
