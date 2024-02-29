import {styled} from "@mui/system";
import {Grid} from "@mui/material";

export const CardContainer = styled(Grid)(() => ({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    flexDirection: "column",
    borderRadius: "35px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "50px 20px 35px 20px",
    backdropFilter: "blur(10px)",
    minWidth: "1360px",
}));

export const Image = styled('img')(() => ({
    position: "absolute",
    top: "-250px",
    height: "800px",
    left: "3%"
}));

export const CardContent = styled(Grid)(() => ({
    height: "100%",
    flexDirection: "column",
}));