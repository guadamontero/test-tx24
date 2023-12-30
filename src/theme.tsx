import styled from "styled-components";
import { TextProps } from "./types";

export const colors = {
  gray: "#777E8F",
  lightGreen: "#74BF8C",
  lightRed: "#ED8184",
};

export const sizes = {
  iconSize: "15px",
};

export const Text = styled.div<TextProps>`
  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "extra-bold":
        return "font-weight: 900;";
      case "bold":
        return "font-weight: 700;";
      case "semi-bold":
        return "font-weight: 500;";
      case "light":
        return "font-weight: 300;";
      default:
        return "font-weight: normal;";
    }
  }}
  ${({ fontSize }) => {
    switch (fontSize) {
      case "large":
        return "font-size: 1.5rem;";
      case "medium":
        return "font-size: 1.2rem;";
      case "small":
        return "font-size: .9rem;";
      case "tiny":
        return "font-size: .8rem;";
      default:
        return "font-size: 1rem;";
    }
  }}
`;
