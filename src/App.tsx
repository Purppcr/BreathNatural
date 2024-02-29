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
import {Title} from "./components/title/styled";

function App() {
    return (
        <Wrapper>
            <Container>
                <Header/>
                <Heading/>
                <Title variant="h4" mb={10}>Our Trendy plants</Title>
                <Grid container flexDirection="column" gap={10} marginBottom={10}>
                    {wideCards.map((card, index) => (
                        <WideCard
                            {...card}
                            imagePlacement={index % 2 ? "right" : "left"}
                            key={card.title}
                        />
                    ))}
                </Grid>
                <Title variant="h4" mb={20}>Our Top Selling</Title>
                <Grid
                    display="grid"
                    gridTemplateColumns="repeat(3, auto)"
                    justifyItems="center"
                    rowGap="7rem"
                >
                    {commonCard.map((common) => (
                        <CommonCard {...common} key={common.title}/>
                    ))}
                </Grid>
                <Title variant="h4" mb={10} mt={10}>Customer Review</Title>
                <Grid
                    display="grid"
                    gridTemplateColumns="repeat(3, auto)"
                    justifyItems="center"
                    gap="3rem"
                    mb={10}
                >
                    {reviews.map((review) => (
                        <ReviewCard {...review} key={review.name}/>
                    ))}
                </Grid>
                <Title variant="h4" mb={10} mt={10}>Our Best o2</Title>
                <Grid container justifyContent="center" mb={10}>
                    {aboutUsCard.map((about) => (
                        <AboutUsCard {...about} key={about.title}/>
                    ))}
                </Grid>
            </Container>
            <Footer/>
        </Wrapper>
    );
}

export default App;
