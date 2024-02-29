import {FooterButton, FooterContainer, FooterListItem} from "./styled";
import {Grid, List, ListItemButton, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Logo from "../../assets/icons/logo.png";

export default function Footer() {
    return (<FooterContainer>
            <Grid container >
                <Grid container alignItems="flex-end" mb={5}>
                <Box component="img" src={Logo} sx={{maxWidth: "60px", minHeight: "60px"}}></Box>
                <Typography fontWeight={"bold"} variant={"h4"} color={"white"}>
                    Planto.
                </Typography>
                </Grid>
                <Typography fontWeight={"bold"} color={"white"} mb={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography fontWeight={"bold"} color={"white"}>
                    FB TW LI
                </Typography>
            </Grid>
            <Grid justifySelf={"center"}>
                <List sx={{color: "white", padding: "0", }} >
                    <Typography color={"white"} fontWeight={"bold"} variant={"h6"}>
                        Quick Link’s
                    </Typography>
                    <FooterListItem>
                        <ListItemButton>
                            Home
                        </ListItemButton>
                    </FooterListItem>
                    <FooterListItem>
                        <ListItemButton>
                            Type’s Of plant’s
                        </ListItemButton>
                    </FooterListItem>
                    <FooterListItem>
                        <ListItemButton>
                            Contact
                        </ListItemButton>
                    </FooterListItem>
                    <FooterListItem>
                        <ListItemButton>
                            Privacy
                        </ListItemButton>
                    </FooterListItem>
                </List>
            </Grid>
            <Grid>
                <Typography color={"white"} fontWeight={"bold"} variant={"h6"} mb={5}>
                    For Every Update.
                </Typography>
                <TextField sx={{input: {color: 'white'}, mb: "100px"}}
                           size={"small"}
                           label="Enter Email"
                           variant="outlined"/>
                <FooterButton variant="contained">SUBCRIBE</FooterButton>
                <Typography fontWeight={"bold"} color={"white"}>
                    Planto © all right reserve
                </Typography>
            </Grid>
        </FooterContainer>
    )
}
