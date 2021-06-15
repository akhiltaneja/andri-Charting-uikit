import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { ButtonProps, sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorKey: "primary" | "textSubtle";
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: rgb(109, 168, 255);
  height: 40px;
  padding: 12px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ActiveButton = styled(Button)<ButtonProps>`
  font-family: Poppins;
  background-color: #353547;
  color: rgb(109, 168, 255);
  height: 40px;
  padding: 12px;
  border-radius: 12px;

  &:hover:not(:disabled):not(:active) {
    background-color: #353547;
  }
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="tertiary"
        colorKey={variant === variants.PRIMARY ? "primary" : "textSubtle"}
        {...props}
      />
    );
  }

  return <ActiveButton as={as} size={size} variant={variant} {...props} />;
};

export default ButtonMenuItem;
