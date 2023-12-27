import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import logo from "../../src/styles/images/apoinlty_logo.webp";
import { useState } from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
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
        {menuItems.map((menuItem, index) => (
          <NavbarItem key={index}>
            <Link
              href={menuItem.link}
              className={` hover:text-gray-100 ${
                isLinkActive(menuItem.link)
                  ? `text-white font-bold ${console.log("NAI")}` // Apply active styles here
                  : `text-slate-300 font-semibold${console.log("OXIIII")}`
              }`}
            >
              {console.log(menuItem.link)}
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
        <NavbarItem className="hidden lg:flex">
          <NavLink className="text-white font-semibold" to="/login">
            Login
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-btn-purple text-white font-semibold"
            as={Link}
            href="/register"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
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
