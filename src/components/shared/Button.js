import styled from "styled-components";

import { colors } from "../../constants/variables";

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${({ light }) => (light ? colors.white : colors.white)};
  color: ${({ light }) => (light ? colors.primary : colors.text)};
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  min-width: 200px;
  transition: transform 0.1s ease-in;

  &:hover {
    background-color: ${({ light }) =>
      light ? colors.primaryLight : colors.black};
    color: ${({ light }) => (light ? colors.primary : colors.white)};
  }
`;

export default Button;
