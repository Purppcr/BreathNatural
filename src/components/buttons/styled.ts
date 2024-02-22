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
