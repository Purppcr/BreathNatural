import {Grid, styled} from "@mui/material";

export const CardContainer = styled(Grid)(() => ({
  position: "relative",
  display: "grid",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.05)",
  padding: "35px 25px",
  minWidth: "300px",
  gap: "2",
}));

export const ReviewContainer = styled(Grid)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
