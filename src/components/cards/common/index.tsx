import {Grid, Paper, Typography} from "@mui/material";
import {CardContainer, CardContent, Image} from "./styled";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {MiniIconButton} from "../../buttons/styled";

type IProps = {
    image: string;
    title: string;
    description: string;
    price: number;
};

export default function CommonCard({image, title, description, price}: IProps) {
    return (
        <Grid xs={4} mb={13}>
            <Paper elevation={10} sx={{background: "none", borderRadius: "30px", maxWidth: "300px"}}>
                <CardContainer>
                    <Image src={image}/>
                    <CardContent>
                        <Typography variant="h5" mb={3} color="white">
                            {title}
                        </Typography>
                        <Typography mb={3} color="white">
                            {description}
                        </Typography>
                        <Grid container gap={2} sx={{justifyContent: "space-between"}}>
                            <Typography variant="h5" color="white">
                                Rs.{price} /-
                            </Typography>
                            <MiniIconButton >
                                <LocalMallOutlinedIcon sx={{fontSize: "medium"}}/>
                            </MiniIconButton>
                        </Grid>
                    </CardContent>
                </CardContainer>
            </Paper>
        </Grid>
    );
}
