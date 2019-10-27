import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, headerHeight } from "../../common/common.styles";

export const AppHeader = styled.header`
  text-align: center;
  background-color: ${colors.bg};
  color: white;
  height: ${headerHeight};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:active,
  &:hover,
  &:visited {
    color: white;
  }
`;

export const Title = styled.h1`
  font-weight: lighter;
  margin: 0;

  &:after {
    content: "beta";
    position: absolute;
    font-size: 11px;
  }
`;
