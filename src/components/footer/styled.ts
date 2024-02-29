import {styled} from "@mui/system";
import {Button, Grid, ListItem} from "@mui/material";

export const FooterContainer = styled(Grid)(() => ({
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "33% 33% 33%",
    background: "#222C1D",
    padding: "30px 30px 30px 30px",
}));

export const FooterListItem = styled(ListItem)(() => ({
    paddingTop: "0",
    paddingBottom: "0",

    "& .MuiListItemButton-root": {
        minWidth: "max-content",

        "&:hover": {
            background: "green",
        },
    },
}));

export const FooterButton = styled(Button)(() => ({
    variant: "contained",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
        background: "green",
    }
}));