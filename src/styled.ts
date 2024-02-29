import { Box, styled } from "@mui/system";
import BackgroundPlant from "./assets/images/backgroundPlant.png";

export const Wrapper = styled(Box)(() => ({
  backgroundImage: `url(${BackgroundPlant})`,
  backgroundPosition: "top",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#1c2316",
}));

export const Container = styled(Box)(() => ({
  padding: "2rem",
  maxWidth: "1728px",
  margin: "0 auto",
}));
