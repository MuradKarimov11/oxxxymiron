import ScrollAnimation from "react-animate-on-scroll";

import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { Socials } from "../Socials/Socials";
import { Hamburger } from "./Hamburger";

import { MENU } from "../../utils/constants";

export const Header = () => (
  <section className="header">
    <div className="container">
      <header>
        <Logo/>    
        <nav className="menu">
          {MENU.map(({name, link}, i) => (
            <ScrollAnimation 
              key={link} 
              className="menu-item" 
              animateIn="fadeInDown" 
              delay={i * 100} 
              offset={0}
            >
              <NavLink
                className={({ isActive }) =>
                  !link.startsWith("#") && isActive ? "active" : ""
                }
                to={`/${link}`}
              >
                {name}
              </NavLink>
            </ScrollAnimation>          
          ))} 
        </nav>  
        <Socials/> 
        <Hamburger/>
      </header>
    </div>
  </section>
)
