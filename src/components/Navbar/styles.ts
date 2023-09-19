import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 80rem;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 12rem;

  img {
    width: 3rem;
  }

  span {

  }
`

export const NavbarSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    cursor: pointer;
  }
`

export const NavbarList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style-type: none;
  width: max-content;
`

export const VerticalSeparator = styled.div`
  height: 1rem;
  width: 1px;
  background-color: ${({ theme }) => theme['gray-600']};
  margin-right: 1rem;
`