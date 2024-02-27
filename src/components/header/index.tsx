import {HeaderBar, HeaderContent, HeaderList, HeaderListItem} from "./styled";
import Logo from ".//logo.png";
import {Box} from "@mui/system";
import {IconButton, Typography} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <HeaderBar>
            <HeaderContent container>
                <Box component="img" src={Logo} sx={{maxWidth: "40px"}}></Box>
                <Typography fontWeight={"bold"} variant={"h5"} color={"white"}>
                    Planto.
                </Typography>
                <HeaderList>
                    <HeaderListItem>
                        Home
                    </HeaderListItem>
                    <HeaderListItem>
                        Plants Type
                    </HeaderListItem>
                    <HeaderListItem>
                        More
                    </HeaderListItem>
                    <HeaderListItem>
                        Contact
                    </HeaderListItem>
                </HeaderList>
                <HeaderContent >
                    <IconButton sx={{color: "white"}}>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton sx={{color: "white"}}>
                        <LocalMallOutlinedIcon/>
                    </IconButton>
                    <IconButton sx={{color: "white"}}>
                        <MenuIcon/>
                    </IconButton>
                </HeaderContent>
            </HeaderContent>
        </HeaderBar>
    )
}