import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import CarWidget from '../CarWidget/carWidget'
import logoTemplo from '../../assets/logo.png'

const NavBarNext = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [categoria, setCategoria] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoria(data))
  }, [])



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="NavbarNext">
      <NavbarContent className="toggle-n md:hidden">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent justify="center">
          <NavLink to={`/`}>
            <NavbarBrand className="p-4">
              <img src={logoTemplo} alt="logo del ecommers" />
            </NavbarBrand>
          </NavLink>
        </NavbarContent>
        <NavbarContent className="p-3 max-w-[50px]" justify="end">
          <NavLink to={`/carrito`}>
            <NavbarItem className="contenedor-badge">
              <CarWidget />
            </NavbarItem>
          </NavLink>

        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="md:flex hidden max-w-[500px]" justify="start">
        <NavLink to={`/`}>
          <NavbarItem>
            <img src={logoTemplo} alt="logo del ecommers" />
          </NavbarItem>
        </NavLink>

      </NavbarContent>
      <div className="centrado-a">
        <NavbarContent className="hidden md:flex gap-4 " justify="center">
          <NavLink to={`/`}>
            <NavbarItem className="navbar-list">
              home
            </NavbarItem>
          </NavLink>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent navbar-list"

                  radius="sm"
                  variant="light"
                >
                  Productos
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem>
                <NavLink to={`/productos`}>
                  Todas las Categorias
                </NavLink>
              </DropdownItem>
              {categoria.map((cat) => (<DropdownItem key={cat} value={cat}>
                <NavLink to={`/productos/${cat}`}>
                  {cat}
                </NavLink>
              </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <NavLink to={`/detalles`}>
            <NavbarItem className="navbar-list">
              Contacto
            </NavbarItem>
          </NavLink>
        </NavbarContent>
        <NavbarContent className=" hidden md:flex p-3 max-w-[50px]" justify="end">
          <NavLink to={`/carrito`}>
            <NavbarItem className="contenedor-badge">
              <CarWidget />
            </NavbarItem>
          </NavLink>
        </NavbarContent>
      </div>
      <NavbarMenu className="menu-top" >
        <NavLink to={`/`}>
          <NavbarItem className="navbar-list">
            home
          </NavbarItem>
        </NavLink>
        <NavLink to={`/productos`}>
          <NavbarItem className="navbar-list">
            Productos
          </NavbarItem>
        </NavLink>
        <NavLink to={`/detalles`}>
          <NavbarItem className="navbar-list">
            Contacto
          </NavbarItem>
        </NavLink>
      </NavbarMenu>
    </Navbar>
  );
}
export default NavBarNext