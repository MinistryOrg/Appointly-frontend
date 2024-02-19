import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";
import logo from "../../src/assets/images/apoinlty_logo.webp";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";
import { useAuth } from "../contexts/AuthContext";
import { UserIcon } from "../assets/UserIcon";

export default function NavBar() {
  const { loggedIn, changeLoggedIn, lastname, firstname, isAdmin } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { navText: "Home", link: "/" },
    { navText: "Services", link: "/#services" },
    { navText: "About", link: "/#about" },
    { navText: "Contact", link: "/#contact" },
    { navText: "Admin", link: "/dashboard" },
  ];

  const isLinkActive = (link) => {
    if (link === "/") {
      return location.pathname === link;
    } else {
      return location.hash === link || (location.hash === "" && link === "/");
    }
  };

  console.log("is admin", isAdmin);
  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary-purple overflow-x-hidden rounded-b-lg"
      maxWidth="2xl"
      height={`4.5rem`}
    >
      <ScrollToHashElement />
      <NavbarContent className="hidden sm:flex gap-9" justify="start">
        {navItems.map((menuItem, index) => (
          <NavbarItem key={index}>
            <Link
              href={menuItem.link}
              className={` hover:text-gray-100 ${
                isLinkActive(menuItem.link)
                  ? `text-white font-bold` // Apply active styles here
                  : `text-slate-300 font-semibold`
              }`}
            >
              {menuItem.navText}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand justify="center" className="justify-center cursor-pointer">
          <Image
            width={150}
            src={logo}
            radius="none"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-6">
        <NavbarItem className="hidden md:flex">
          {loggedIn ? (
            <span className="flex gap-2 text-white">
              <p className="text-white font-semibold">
                {firstname} {lastname}
              </p>
              <UserIcon />
            </span>
          ) : (
            <NavLink className="text-white font-semibold" to="/login">
              Login
            </NavLink>
          )}
        </NavbarItem>
        <NavbarItem>
          {loggedIn ? (
            <NavLink
              className="transition duration-300 ease-in-out bg-btn-purple text-white font-semibold px-3 py-2 rounded-md hover:bg-h-btn-purple "
              as={Link}
              to="#"
              onClick={() => {
                changeLoggedIn(false);
                localStorage.clear();
              }}
              variant="flat"
            >
              Log out
            </NavLink>
          ) : (
            <NavLink
              className="transition duration-300 ease-in-out bg-btn-purple text-white font-semibold px-3 py-2 rounded-md hover:bg-h-btn-purple"
              as={Link}
              to="/register"
              variant="flat"
            >
              Sign up
            </NavLink>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full font-bold text-main-clr" href="#" size="lg">
              {item.navText}
            </Link>
          </NavbarMenuItem>
        ))}
        <hr />
        <NavbarMenuItem>
          {loggedIn ? (
            <span className="flex gap-2 text-primary">
              {/* <UserIcon /> */}
              <p className="text-primary font-bold">
                {firstname} {lastname}
              </p>
            </span>
          ) : (
            <NavLink className="text-primary font-bold" to="/login">
              Login
            </NavLink>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
