import { CircleNotch } from "phosphor-react";
import styled from "styled-components";

export const ProjectsContainer = styled.nav`
  margin-left: calc((100vw - 500px) / 2);
  margin-top: 250px;

  a {
    font-weight: 400;
    font-family: t26-carbon, monospace;
  }
`

export const CircleNotchCustom = styled(CircleNotch)`
  margin: 300px calc((100vw - 24px) / 2) 0 calc((100vw - 24px) / 2);
`
