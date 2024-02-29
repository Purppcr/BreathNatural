import {Grid, Typography} from "@mui/material";
import {HeadingContainer} from "./styled";
import {IconButton, TextButton} from "../buttons/styled";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeadingCard from "../cards/heading/productSwiper";
import ReviewerCard from "../cards/heading/reviewer";

export default function Heading() {
    return (<HeadingContainer>
            <Grid>
                <Typography variant="h1" color="white">
                    Breath Natureal
                </Typography>
                <Typography color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Grid container gap={2} mt={2} mb={30}>
                    <TextButton sx={{border: "0.5px solid"}}>Explore</TextButton>
                    <IconButton sx={{borderRadius: "360px", border: "0.5px solid"}}><PlayArrowIcon/></IconButton>
                    <Typography color="white" alignSelf="center">Live Demo...</Typography>
                </Grid>
                <ReviewerCard/>
            </Grid>

                <HeadingCard/>

        </HeadingContainer>
    )
}