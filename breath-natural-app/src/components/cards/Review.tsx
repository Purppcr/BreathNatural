import {Button, CardContent, CardMedia, Grid, Paper} from "@mui/material";
import {StyledReview} from "./StyledCard";
export default function Review() {
// const img = "/assets/images/ReviewPlant.png"
    return (

        <Paper elevation={10}>
            <StyledReview>
                <CardMedia
                    component="img"
                    image="/assets/images/ReviewPlant.png"
                />
                <CardContent>
                    <h5>Trendy House Plant</h5>
                    <h3>Calathea plant</h3>
                </CardContent>
                <Button variant="outlined"
                        size="small"
                >
                    Buy Now
                </Button>
            </StyledReview>
        </Paper>

    )
}