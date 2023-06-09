import styled from "styled-components";

interface ShowcaseProps {
  tone: {
    background: string;
    primary: string;
  };
}

// eslint-disable-next-line no-undef
export const Container = styled.div<ShowcaseProps>`
  overflow: hidden;

  color: ${(props) => {
    return props.theme["gray-100"];
  }};
  background: linear-gradient(
    to bottom,
    ${(props) => props.tone.background},
    ${(props) => props.theme["gray-900"]}
  );

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  @import url("https://use.typekit.net/amo0ldj.css");
  font-family: t26-carbon, monospace;
  width: fit-content;
  margin: 64px auto;
  z-index: 999;

  h1 {
    display: flex;
    align-items: center;
  }

  a {
    opacity: 0.8;
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      opacity: 1;
    }
  }
`;

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
`;

export const Subtitle = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
  margin-top: -4px;
`;

export const Line = styled.p<ShowcaseProps>`
  background-color: ${(props) => props.tone.primary};
  border-radius: 2px;
  height: 1px;
  opacity: 0.4;
  margin-top: -16px;
`;

export const CallToAction = styled.div<ShowcaseProps>`
  font-family: t26-carbon, monospace;
  font-weight: 600;

  h2 {
    font-weight: lighter;
    font-size: 12px;

    .first {
      background: ${(props) => props.tone.primary + "10"};
      color: ${(props) => props.tone.primary};
    }

    .second {
      background-color: transparent;
      color: ${(props) => props.theme["gray-100"]};
    }
  }

  .third {
    font-weight: 400;
  }
`;
