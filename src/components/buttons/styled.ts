import { Button, styled } from "@mui/material";

const ButtonBase = styled(Button)(() => ({
  color: "white",
  minWidth: "48px",
  minHeight: "48px",
  borderRadius: "12px",
  border: "2px solid white",
}));

export const TextButton = styled(ButtonBase)(() => ({
  padding: "0 48px",
}));
export const IconButton = styled(ButtonBase)(() => ({
  padding: "0",
}));

ButtonBase.defaultProps = {
  variant: "outlined",
};


export const MiniIconButton = styled(ButtonBase)(() => ({
  padding: "0",
  borderRadius: "7px",
  minWidth: "35px",
  minHeight: "35px",
  border: "1px solid white",
}));

ButtonBase.defaultProps = {
  variant: "outlined",
};
