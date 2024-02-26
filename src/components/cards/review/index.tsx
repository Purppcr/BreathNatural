import { Avatar, Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { CardContainer, ReviewContainer } from "./styled";

type IProps = {
  avatar: string;
  name: string;
  rating: number;
  text: string;
};

export default function ReviewCard({ avatar, name, rating }: IProps) {
  return (
    <Paper elevation={10} sx={{ background: "none", borderRadius: "20px" }}>
      <CardContainer>
        <ReviewContainer>
          <Grid container justifyContent="space-between">
            <Avatar src={avatar} sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography color="white">{name}</Typography>
              <Rating defaultValue={rating} precision={0.5} readOnly />
            </Box>
          </Grid>
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </ReviewContainer>
      </CardContainer>
    </Paper>
  );
}
