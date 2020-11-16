import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "carbon-components-react/lib/components/Button";
import { blue } from "@carbon/colors";

export const Container = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const Spacer = styled.div`
  height: 48px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  width: 25%;
  color: ${({ active }) => (active ? blue[80] : blue[30])};
  background-color: ${({ active }) => (active ? blue[30] : blue[80])};
`;

export const NavButton = styled(Button)`
  width: 100%;
  justify-content: center;
  background-color: ${blue[30]};
  color: ${blue[80]};
`;
