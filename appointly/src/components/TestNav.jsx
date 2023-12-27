import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function TestNav() {
  const location = useLocation();

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/#services" },
    { label: "About", link: "/#about" },
    { label: "Contact", link: "/#contact" },
  ];

  const isLinkActive = (link) => {
    if (link === "/") {
      return location.pathname === link;
    } else {
      return location.hash === link;
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold">Logo</div>
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-4">
                {menuItems.map((menuItem, index) => (
                  <NavLink
                    key={index}
                    to={menuItem.link}
                    className={`text-white hover:text-gray-300`}
                  >
                    {menuItem.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
