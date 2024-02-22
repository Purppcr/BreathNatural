import { Box, styled } from "@mui/system";
import BackgroundPlant from "./assets/images/backgroundPlant.png";

export const AppContainer = styled(Box)(() => ({
  backgroundImage: `url(${BackgroundPlant})`,
  backgroundPosition: "top",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#1c2316",
  padding: "2rem",

  minHeight: "200vh", // must be removed
}));
