import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, Button } from "@nextui-org/react";
import { NavLink, Link } from "react-router-dom";
import CarWidget from '../CarWidget/carWidget'
import logoTemplo from '../../assets/logo.png'
import style from './style.module.css'


const NavBarNext = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categorias = ["perifericos","motherboards", "procesadores", "placas de video"]



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={style.NavbarNext}>
      <NavbarContent className={`${style.togglen} md:hidden`}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
            <NavLink to={`/`}>
              <NavbarBrand className="p-4">
                <img src={logoTemplo} alt="logo del ecommers" />
              </NavbarBrand>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="p-3 max-w-[50px]" justify="end">
          <NavbarItem>
            <NavLink to={`/carrito`}>
              <NavbarBrand className={style.contenedorbadge}>
                <CarWidget />
              </NavbarBrand>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="md:flex hidden max-w-[500px]" justify="start">
        <NavbarItem>
          <NavLink to={`/`}>
            <NavbarBrand>
              <img src={logoTemplo} alt="logo del ecommers" />
            </NavbarBrand>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <div className={style.centradoa}>
        <NavbarContent className="hidden md:flex gap-4 " justify="center">
          <NavbarItem>
            <NavLink to={`/`} className={style.navbarlist}>
              home
            </NavLink>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={`p-0 bg-transparent data-[hover=true]:bg-transparent ${style.navbarlist}`}

                  radius="sm"
                  variant="light"
                >
                  Productos
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >

              <DropdownItem textValue="Todas las categorias">
                <NavLink to={`/productos`}>
                  <NavbarBrand className="justify-center">
                    Todas las Categorias
                  </NavbarBrand>
                </NavLink>
              </DropdownItem>
              {categorias.map((cat) => (
                <DropdownItem key={cat} textValue={cat}>
                  <NavLink to={`/productos/${cat}`}>
                    <NavbarBrand className="justify-center">
                      {cat}
                    </NavbarBrand>
                  </NavLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <NavLink to={`/formulario`}>
              <NavbarBrand className={style.navbarlist}>
                Contacto
              </NavbarBrand>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to={`/ordenes`}>
              <NavbarBrand className={style.navbarlist}>
                Ordenes
              </NavbarBrand>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className=" hidden md:flex p-3 max-w-[50px]" justify="end">
          <NavbarItem>
            <NavLink to={`/carrito`}>
              <NavbarBrand className={style.contenedorbadge}>
                <CarWidget />
              </NavbarBrand>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarMenu className={style.menutop} >
        <NavbarItem>
          <NavLink to={`/`}>
            <NavbarBrand className={style.navbarlist}>
              home
            </NavbarBrand>
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to={`/productos`}>
            <NavbarBrand className={style.navbarlist}>
              Productos
            </NavbarBrand>
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to={`/formulario`}>
            <NavbarBrand className={style.navbarlist}>
              Contacto
            </NavbarBrand>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={`/ordenes`}>
            <NavbarBrand className={style.navbarlist}>
              Ordenes
            </NavbarBrand>
          </NavLink>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
export default NavBarNext