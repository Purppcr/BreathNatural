import {Avatar, Box, Grid, Paper, Rating, Typography} from "@mui/material";
import {ReviewerCardContainer, ReviewerContainer} from "./styled";


export default function ReviewerCard() {
    return (
            <ReviewerCardContainer>
                <ReviewerContainer>
                    <Grid container gap={2} mb={1}>
                        <Avatar src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=64&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                sx={{ width: 45, height: 45 }} />
                        <Box>
                            <Typography color="white">Alena Patel</Typography>
                            <Rating size="small" defaultValue={4.5} precision={0.5} readOnly />
                        </Box>
                    </Grid>
                    <Typography variant={"caption"} color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                    </Typography>
                </ReviewerContainer>
            </ReviewerCardContainer>
    );
}