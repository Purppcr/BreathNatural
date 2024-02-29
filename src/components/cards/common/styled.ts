import {styled} from "@mui/system";
import {Grid, Paper} from "@mui/material";

export const CardContainer = styled(Grid)(() => ({
  position: "relative",
  display: "grid",
  borderRadius: "50px",
  background: "rgba(255, 255, 255, 0.05)",
  padding: "170px 50px 30px 45px",
  maxWidth: "300px",
}));

export const CardContent = styled(Grid)(() => ({
  height: "100%",
}));

export const Image = styled('img')(() => ({
  position: "absolute",
  maxWidth: "120px",
  top: "-100px",
  left: "30%",
}));
