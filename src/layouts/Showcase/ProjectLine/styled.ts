import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ProjectButtonProps {
  odd: boolean
}

export const ProjectButton = styled(NavLink)<ProjectButtonProps>`
  border: 1px solid ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-100']};

  margin-left: ${(props) => props.odd ? '50px' : '200px'};

  transition: all 0.5s ease;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &+.proj_link {
    margin-left: 20px;
  }
`
