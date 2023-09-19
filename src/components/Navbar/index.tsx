import { LogoWrapper, NavbarContainer, NavbarContent, NavbarList, NavbarSocialLinks, VerticalSeparator } from "./styles";
import Bee from "../../assets/favicon.ico"
import { InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoWrapper>
          <img src={Bee} alt="" />
          <span>Bee Takes</span>
        </LogoWrapper>
        <NavbarList>
          <Link to="/">Home</Link>
          <Link to="/about-us">Sobre Nós</Link>
        </NavbarList>
        <NavbarSocialLinks>
          <VerticalSeparator />
          <InstagramLogo size={24} weight="duotone" />
          <YoutubeLogo size={24} weight="duotone" />
        </NavbarSocialLinks>
      </NavbarContent>
    </NavbarContainer>
  )
}