import {styled} from "@mui/system";
import {Grid} from "@mui/material";

export const FooterContainer = styled(Grid)(() => ({
    position: "relative",
    display: "grid",
    width: '100%',
    gridTemplateColumns: "25 25 25 25",
    background: "#222C1D",
    padding: "10 10px",
}));