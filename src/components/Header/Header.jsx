import ScrollAnimation from "react-animate-on-scroll";
import { MENU } from "../../utils/constants";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { Socials } from "../Socials/Socials";

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
              <Link to={`/${link}`}>{name}</Link>
            </ScrollAnimation>          
          ))} 
        </nav>  
        <Socials/> 
      </header>
    </div>
  </section>
)
