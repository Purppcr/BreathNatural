import {Paper, Rating, Typography} from "@mui/material";
import {CardContainer, ReviewContainer, ReviewerAvatar} from "./styled";

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
          <ReviewerAvatar src={avatar} />
          <Typography color="white">
            {name}
          </Typography>
          <Rating defaultValue={rating} precision={0.5} readOnly />
          <Typography color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </Typography>
        </ReviewContainer>
      </CardContainer>
    </Paper>
  );
}
