import {styled} from "@mui/system";
import {Grid, List, ListItem} from "@mui/material";

export const HeaderBar = styled(Grid)(() => ({
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "15px 10px 15px 20px",
    margin: "25px 300px 10px 300px",
}));

export const HeaderContent = styled(Grid)(() => ({
    justifyContent: "space-between",
    padding: "0",
}));
export const HeaderList = styled(List)(() => ({
    display: 'flex',
    flexDirection: 'row',
    color: "white",
    padding: "0",
}));

export const HeaderListItem = styled(ListItem)(() => ({
    paddingTop: "0",
    paddingBottom: "0",
}));

export const Logo = styled("img")(() => ({
    maxHeight: "25px",
    maxWidth: "25px"

}));
