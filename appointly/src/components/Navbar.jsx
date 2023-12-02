import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import logo from "../../src/styles/images/apoinlty_logo.webp";

export default function NavBar() {
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-primary-purple overflow-x-hidden	"
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
      <NavbarBrand justify="center" className="justify-center">
        <Image width={150} src={logo} radius="none" />
        {/* <p className="font-bold text-inherit text-center" >
          ACME
        </p> */}
      </NavbarBrand>
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
    </Navbar>
  );
}
