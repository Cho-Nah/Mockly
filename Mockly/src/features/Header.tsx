import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid>
      <NavbarBrand>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Mockly
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <button className="w-28 cursor-pointer rounded-lg bg-purple-500 p-2 text-stone-50">
          Get started
        </button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
