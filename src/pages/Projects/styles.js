import styled from "styled-components";
import { white } from "@carbon/colors";

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;
export const ViewLink = styled.a`
  display: flex;
  width: 4.5rem;
  text-decoration: none;
  padding: 0.2rem 0.2rem 0.5rem 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  justify-content: center;
  border: 2px solid #0043ce;
  background-color: #00286d;
  transition: background-color 250ms ease;

  &:hover {
    background-color: #0043ce;
  }

  svg {
    fill: white;
    padding-top: 4px;
    margin-left: 4px;
  }
`;
