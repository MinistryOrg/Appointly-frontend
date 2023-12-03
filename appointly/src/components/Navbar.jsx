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

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Services", "About", "Contact"];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary-purple overflow-x-hidden"
      maxWidth="2xl"
      height={`4.5rem`}
    >
      <NavbarContent className="hidden sm:flex gap-10" justify="start">
        <NavbarItem>
          <Link className="text-white font-semibold" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-semibold" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-semibold" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-semibold" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand justify="center" className="justify-center">
          <Image width={150} src={logo} radius="none" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-6">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white font-semibold" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-btn-purple text-white font-semibold"
            as={Link}
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-bold text-main-clr"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
