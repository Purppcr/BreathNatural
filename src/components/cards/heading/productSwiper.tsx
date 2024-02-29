import {Grid, Paper, Typography} from "@mui/material";
import {CardContainer, Image} from "./styled";
import {TextButton} from "../../buttons/styled";

import image from "../../../assets/images/HeaderPlant.png"
export default function HeadingCard() {
    return (
        <Grid justifySelf="center">
            <Paper
                elevation={10}
                sx={{background: "none", borderRadius: "30px", maxWidth: "300px"}}
            >
                <CardContainer>
                    <Image src={image}/>
                        <Typography  mb={1} color="white">
                            Trendy House Plant
                        </Typography>
                        <Typography variant="h5" mb={1} color="white">
                            Calathea plant
                        </Typography>
                        <Grid container>
                            <TextButton sx={{border: "0.5px solid"}}>Buy Now</TextButton>
                        </Grid>
                </CardContainer>
            </Paper>
        </Grid>
    )
}
