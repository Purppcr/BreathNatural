import {Grid} from "@mui/material";
import ReviewCard from "./components/cards/review";
import {aboutUsCard, commonCard, reviews, wideCards} from "./constants";
import {Container, Wrapper} from "./styled";
import WideCard from "./components/cards/wide";
import CommonCard from "./components/cards/common";
import AboutUsCard from "./components/cards/aboutUs";
import Header from "./components/header";
import Footer from "./components/footer";
import Heading from "./components/heading";

function App() {
    return (
        <Wrapper>
            <Container>
                <Header/>
                <Heading/>
                <Grid container flexDirection="column" gap={10} marginBottom={10}>
                    {wideCards.map((card, index) => (
                        <WideCard
                            {...card}
                            imagePlacement={index % 2 ? "right" : "left"}
                            key={card.title}
                        />
                    ))}
                </Grid>
                <Grid
                    display="grid"
                    gridTemplateColumns="repeat(3, auto)"
                    justifyItems="center"
                    rowGap="10rem"
                >
                    {commonCard.map((common) => (
                        <CommonCard {...common} key={common.title}/>
                    ))}
                </Grid>
                <Grid container justifyContent="space-between">
                    {reviews.map((review) => (
                        <ReviewCard {...review} key={review.name}/>
                    ))}
                </Grid>
                <Grid container justifyContent="center">
                    {aboutUsCard.map((about) => (
                        <AboutUsCard {...about} key={about.title}/>
                    ))}
                </Grid>
                <Footer/>
            </Container>
        </Wrapper>
    );
}

export default App;
