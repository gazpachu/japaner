import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const headerHeight = "50px";

export const colors = {
  primary: "#7e5bef",
  secondary: "#888",
  bg: "#5b8fef",
  red: "#c74343",
  green: "#30b182"
};

export const breakpoints = {
  mobile: "768px"
};

export const PageContainer = styled.section`
  text-align: center;
  padding: 20px;
  background: linear-gradient(
    to bottom,
    ${colors.bg} 0%,
    rgba(112, 64, 117, 0.85) 100%
  );
  color: white;
  min-height: calc(100vh - ${headerHeight});
`;

const button = props => css`
  outline: none;
  background: ${props.color ? colors[props.color] : colors.green};
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: ${props.size === "small" ? "11px" : "14px"};
  padding: ${props.size === "small" ? "5px" : "10px 20px"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${props.color
      ? darken(0.2, colors[props.color])
      : darken(0.2, colors.primary)};
  }

  opacity: ${props.disabled && ".5"};
  pointer-events: ${props.disabled && "none"};
`;

export const Button = styled.button`
  ${button};
`;

export const ButtonLink = styled(Link)`
  ${button};
  text-decoration: none;
`;

export const Nav = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const formElement = css`
  background: white;
  border: 1px solid ${colors.secondary};
  color: #333;
  border-radius: 5px;
  font-size: 14px;
  padding: 9px 8px;
  outline: none;
  width: 100%;
`;

export const Input = styled.input`
  ${formElement};
`;

export const InputInline = styled.input`
  ${formElement};
  margin-right: 5px;
`;

export const Label = styled.label`
  margin-right: 5px;
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;

export const Textarea = styled.textarea`
  ${formElement};
  min-height: 100px;
`;

export const Select = styled.select`
  ${formElement};
  height: 36px;
`;

export const SelectInline = styled.select`
  ${formElement};
  height: 36px;
  margin-right: 5px;
`;

export const Info = styled.span`
  display: block;
  font-size: 12px;
  margin-top: 3px;
`;

export const IconLeft = styled.i`
  margin-right: 5px;
`;

export const IconRight = styled.i`
  margin-left: 5px;
`;
