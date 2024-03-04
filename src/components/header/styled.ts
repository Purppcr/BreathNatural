import { styled } from "@mui/system";
import { Grid, List, ListItem } from "@mui/material";

export const HeaderBar = styled("header")(() => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  padding: "15px 10px 15px 20px",
  // position: "sticky",
  top: "2rem",
  zIndex: "1000",
}));

export const HeaderContent = styled(Grid)(() => ({
  justifyContent: "space-between",
  gap: "1.5rem",
  display: "flex",

  "& .MuiIconButton-root": {
    color: "white",
  },
}));

export const HeaderList = styled(List)(() => ({
  display: "flex",
  flexDirection: "row",
  color: "white",
  padding: "0",
}));

export const DropListItem = styled(List)(() => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
}));

export const HeaderListItem = styled(ListItem)(() => ({
  paddingTop: "0",
  paddingBottom: "0",

  "& .MuiListItemButton-root": {
    minWidth: "max-content",

    "&:hover": {
      background: "green",
    },
  },
}));

export const Logo = styled("img")(() => ({
  maxHeight: "25px",
  maxWidth: "25px",
}));
