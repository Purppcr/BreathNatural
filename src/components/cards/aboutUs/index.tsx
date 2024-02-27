import { Grid, Paper, Typography } from "@mui/material";
import { CardContainer, CardContent, Image } from "./styled";
import { TextButton } from "../../buttons/styled";

type IProps = {
  image: string;
  title: string;
  description: string;
  moreInfo: string;
};
export default function AboutUsCard({
  image,
  title,
  description,
  moreInfo,
}: IProps) {
  return (
    <Paper elevation={10} sx={{ background: "none", borderRadius: "30px" }}>
      <CardContainer>
        <Image src={image} />
        <Grid></Grid>
        <CardContent>
          <Typography variant="h5" mb={3} color="white">
            {title}
          </Typography>
          <Typography mb={3} color="white">
            {description}
          </Typography>
          <Typography mb={3} color="white">
            {moreInfo}
          </Typography>
          <TextButton>Explore</TextButton>
        </CardContent>
      </CardContainer>
    </Paper>
  );
}
