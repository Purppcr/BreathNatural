import { Button, CardContent, CardMedia, Paper } from "@mui/material";
import { StyledCard } from "./styled";

type IProps = {
  image: string;
  name: string;
  rating: number;
  text: string;
};

export default function ReviewCard({ image, name, rating, text }: IProps) {
  return (
    <Paper elevation={10}>
      <StyledCard>
        <CardMedia component="img" src={image} />
        <CardContent>
          <h5>{name}</h5>
          <h3>{rating}</h3>
        </CardContent>
        <Button variant="outlined" size="small">
          Buy Now
        </Button>
      </StyledCard>
    </Paper>
  );
}
