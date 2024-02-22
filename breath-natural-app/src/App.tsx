import React from 'react';
import {Box} from "@mui/material";
import BackgroundPlant from "./components/assets/images/backgroundPlant.png"
import Review from "./components/cards/Review";
function App() {
  return (
      <Box
          sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${BackgroundPlant})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
          }}>

        <Review />
   </Box>
  );
}

export default App;
