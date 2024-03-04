import {Avatar, Box, Grid, Paper, Rating, Typography} from "@mui/material";
import {CardContainer, ReviewContainer} from "./styled";

type IProps = {
    avatar: string;
    name: string;
    rating: number;
    text: string;
};

export default function ReviewCard({avatar, name, rating}: IProps) {
    return (
        <Paper elevation={10} sx={{background: "none", borderRadius: "20px", maxWidth: "300px"}}>
            <CardContainer>
                <ReviewContainer>
                    <Grid container  gap={2}>
                        <Avatar src={avatar} sx={{width: 54, height: 54}}/>
                        <Box mb={3}>
                            <Typography variant="h6" color="white">{name}</Typography>
                            <Rating size="small" defaultValue={rating} precision={0.5} readOnly/>
                        </Box>
                    </Grid>
                    <Typography variant={"caption"} color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                    </Typography>
                </ReviewContainer>
            </CardContainer>
        </Paper>
    );
}
