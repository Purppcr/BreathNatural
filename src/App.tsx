import {Box, Grid} from "@mui/material";
import ReviewCard from "./components/cards/review";
import {aboutUsCard, commonCard, reviews, wideCards} from "./constants";
import {AppContainer} from "./styled";
import WideCard from "./components/cards/wide";
import CommonCard from "./components/cards/common";
import AboutUsCard from "./components/cards/aboutUs";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <AppContainer>
            <Header/>
            {/*<Grid container flexDirection="column" gap={10} marginBottom={10}>*/}
            {/*    {wideCards.map((card, index) => (*/}
            {/*        <WideCard*/}
            {/*            {...card}*/}
            {/*            imagePlacement={index % 2 ? "right" : "left"}*/}
            {/*            key={card.title}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</Grid>*/}
            {/*<Grid container justifyContent="space-between">*/}
            {/*    {reviews.map((review) => (*/}
            {/*        <ReviewCard {...review} />*/}
            {/*    ))}*/}
            {/*</Grid>*/}
            {/*<Grid container>*/}
            {/*    {commonCard.map((common) => (*/}
            {/*        <CommonCard {...common} />*/}
            {/*    ))}*/}
            {/*</Grid>*/}
            {/*<Grid container justifyContent="center">*/}
            {/*    {aboutUsCard.map((about) => (*/}
            {/*        <AboutUsCard {...about} />*/}
            {/*    ))}*/}
            {/*</Grid>*/}
            <Footer/>
        </AppContainer>
    );
}

export default App;
