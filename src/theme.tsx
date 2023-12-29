import styled from "styled-components";
import { TextProps } from "./types";

export const colors = {
  green: "#74BF8C",
  gray: "#777E8F",
  red: "#ED8184",
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
`;
