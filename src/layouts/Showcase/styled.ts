import styled from 'styled-components'

interface ThemeProps {
  tone: {
    background: string
    primary: string
  }
}

export const Container = styled.div<ThemeProps>`
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

export const Title = styled.div<ThemeProps>`
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

export const Line = styled.p<ThemeProps>`
  background-color: ${(props) => props.tone.primary};
  border-radius: 2px;
  height: 1px;
  opacity: 0.4;
  margin-top: -16px;
`
