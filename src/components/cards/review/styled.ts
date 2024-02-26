import {Avatar, Grid, styled} from "@mui/material";

export const CardContainer = styled(Grid)(() => ({
  position: "relative",
  display: "grid",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.05)",
  padding: "10px 20px",
  maxWidth: "250px",
  MaxHeight: "250px",
  backdropFilter: "blur(10px)",
}));

export const ReviewContainer = styled(Grid)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
export const ReviewerAvatar = styled(Avatar)(() => ({
  minHeignt: "80px",
  minWidth: "80px"
}));
