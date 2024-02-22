import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const CardContainer = styled(Grid)(() => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "50% 50%",
  borderRadius: "150px",
  background: "rgba(255, 255, 255, 0.05)",
  padding: "0 80px",
  minHeight: "420px",
  backdropFilter: "blur(10px)",
}));

export const CardContent = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "placement",
})<{ placement: "left" | "right" }>(({ placement }) => ({
  gridColumn: placement === "right" ? "2" : "1",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const Image = styled("img", {
  shouldForwardProp: (prop) => prop !== "placement",
})<{ placement: "left" | "right" }>(({ placement }) => ({
  position: "absolute",
  bottom: "-82px",
  left: placement === "left" ? "-70px" : "",
  right: placement === "right" ? "-10px" : "",
  height: "700px",
}));
