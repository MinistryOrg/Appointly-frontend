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
import logo from "../../src/styles/images/apoinlty_logo.webp";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";
import { useAuth } from "../contexts/AuthContext";
import { UserIcon } from "../assets/UserIcon";

//! When refresh doent show email at navbar. FIX!

export default function NavBar() {
  const { loggedIn, changeLoggedIn, lastname } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { navText: "Home", link: "/" },
    { navText: "Services", link: "/#services" },
    { navText: "About", link: "/#about" },
    { navText: "Contact", link: "/#contact" },
  ];

  const isLinkActive = (link) => {
    if (link === "/") {
      return location.pathname === link;
    } else {
      return location.hash === link || (location.hash === "" && link === "/");
    }
  };

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary-purple overflow-x-hidden rounded-b-lg"
      maxWidth="2xl"
      height={`4.5rem`}
    >
      <ScrollToHashElement />
      <NavbarContent className="hidden sm:flex gap-10" justify="start">
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
        <NavbarItem className=" lg:flex">
          {loggedIn ? (
            <span className="flex gap-2 text-white">
              <p className="text-white font-semibold">{lastname}</p>
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
      </NavbarMenu>
    </Navbar>
  );
}
