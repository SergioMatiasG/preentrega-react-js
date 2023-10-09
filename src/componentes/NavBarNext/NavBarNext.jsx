import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import CarWidget from '../CarWidget/carWidget'
import logoTemplo from '../../assets/logo.png'

const NavBarNext = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="NavbarNext">
      <NavbarContent className="toggle-n md:hidden">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarBrand className="p-4">
            <img src={logoTemplo} alt="logo del ecommers" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="p-3 max-w-[50px]" justify="end">
          <NavbarItem className="contenedor-badge">
            <CarWidget />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="md:flex hidden max-w-[500px]" justify="start">
        <NavbarItem>
          <img src={logoTemplo} alt="logo del ecommers" />
        </NavbarItem>
      </NavbarContent>
      <div className="centrado-a">
        <NavbarContent className="hidden md:flex gap-4 " justify="center">
          <NavbarItem>
            <Link className="navbar-list" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="navbar-list" href="#" >
              Prodcutos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="navbar-list" href="#">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className=" hidden md:flex p-3 max-w-[50px]" justify="end">
          <NavbarItem className="contenedor-badge">
            <CarWidget />
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarMenu className="menu-top" >
        <NavbarItem>
          <Link className="navbar-list" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-list" href="#" >
            Prodcutos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-list" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
export default NavBarNext