import { Grid, Paper, Typography } from "@mui/material";
import { CardContainer, CardContent, Image } from "./styled";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { IconButton, TextButton } from "../../buttons/styled";

type IProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  imagePlacement: "left" | "right";
};

export default function WideCard({
  image,
  title,
  description,
  price,
  imagePlacement,
}: IProps) {
  return (
    <Paper elevation={10} sx={{ background: "none", borderRadius: "150px" }}>
      <CardContainer>
        <Image src={image} placement={imagePlacement} />
        <CardContent placement={imagePlacement === "left" ? "right" : "left"}>
          <Typography variant="h5" mb={1} color="white">
            {title}
          </Typography>
          <Typography mb={1} color="white">
            {description}
          </Typography>
          <Typography mb={1} variant="h5" color="white">
            Rs.{price} /-
          </Typography>
          <Grid container gap={2}>
            <TextButton>Explore</TextButton>
            <IconButton>
              <LocalMallOutlinedIcon />
            </IconButton>
          </Grid>
        </CardContent>
      </CardContainer>
    </Paper>
  );
}
