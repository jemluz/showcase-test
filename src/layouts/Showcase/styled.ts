import styled from 'styled-components'
import { ShowcaseLayoutProps } from '.'
import { NavLink } from 'react-router-dom'

interface ShowcaseProps {
  tone: {
    background: string
    primary: string
  }
}

// eslint-disable-next-line no-undef
export const Container = styled.div<ShowcaseProps>`
  color: ${(props) => {
    console.log(props)
    return props.theme['gray-100']
  }};
  background: linear-gradient(
    to bottom,
    ${(props) => props.tone.background},
    ${(props) => props.theme['gray-900']}
  );

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  @import url('https://use.typekit.net/amo0ldj.css');
  font-family: t26-carbon, monospace;
  width: fit-content;
  margin: 64px auto;

  h1 {
    display: flex;
    align-items: center;
  }

  a {
    opacity: 0.8;
    color: ${(props) => props.theme['gray-100']};

    &:hover {
      opacity: 1;
    }
  }
`

export const Title = styled.div<ShowcaseProps>`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 300;

  strong {
    color: ${(props) => props.tone.primary};
    font-weight: 600;
    margin-left: 4px;
  }
`

export const Subtitle = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
  margin-top: -4px;
`

export const Line = styled.p<ShowcaseProps>`
  background-color: ${(props) => props.tone.primary};
  border-radius: 2px;
  height: 1px;
  opacity: 0.4;
  margin-top: -16px;
`

export const ProjectsNavigation = styled.nav`
  font-family: t26-carbon, monospace;
  font-weight: 400;

  a {
    font-family: t26-carbon, monospace;
  }
`

export const ProjectButton = styled(NavLink)`
  border: 1px solid ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-100']};

  transition: all 0.5s ease;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &+.proj_link {
    margin-left: 20px;
  }
`