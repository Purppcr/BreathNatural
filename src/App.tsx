import { Box, Grid } from "@mui/material";
import ReviewCard from "./components/cards/review";
import { reviews, wideCards } from "./constants";
import { AppContainer } from "./styled";
import WideCard from "./components/cards/wide";

function App() {
  return (
    <AppContainer>
      {/* <Grid container flexDirection="column" gap={10} marginBottom={10}>
        {wideCards.map((card, index) => (
          <WideCard
            {...card}
            imagePlacement={index % 2 ? "right" : "left"}
            key={card.title}
          />
        ))}
      </Grid> */}
      <Grid container justifyContent="space-between">
        {reviews.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Grid>
    </AppContainer>
  );
}

export default App;
