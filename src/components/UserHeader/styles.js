import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  width: 11rem;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  justify-content: center;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`;
