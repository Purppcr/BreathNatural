import {styled} from "@mui/system";
import {Grid} from "@mui/material";

export const CardContainer = styled(Grid)(() => ({
    position: "relative",
    borderRadius: "30px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "350px 150px 10px 65px",
    minHeight: "550px",
    minWidth: "450px",
    backdropFilter: "blur(10px)",
}));

export const Image = styled('img')(() => ({
    position: "absolute",
    maxWidth: "550px",
    top: "-100px",
    left: "-10%",
}));

export const ReviewerCardContainer = styled(Grid)(() => ({
    position: "relative",
    display: "grid",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "20px 25px",
    maxWidth: "300px",
    backdropFilter: "blur(10px)",
}));

export const ReviewerContainer = styled(Grid)(() => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}));
