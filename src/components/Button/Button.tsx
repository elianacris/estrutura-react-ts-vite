import React from "react";
import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        textTransform: "none",
        backgroundColor: "#2D3748",
        color: "white",
        py: 1,
        px: 2,
        borderRadius: "8px",
        " :hover": {
          backgroundColor: "#4a556858",
          color: "black",
        },
        fontWeight: "500",
        fontSize:'1rem'
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
