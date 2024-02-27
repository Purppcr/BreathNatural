import { HeaderBar, HeaderContent, HeaderList, HeaderListItem } from "./styled";
import Logo from "../../assets/icons/logo.png";
import { Box } from "@mui/system";
import { Grid, IconButton, ListItemButton, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <HeaderBar>
      <Grid container padding="0" justifyContent="space-between">
        <Grid container width="auto" alignItems="flex-end" columnGap="1rem">
          <Box component="img" src={Logo} sx={{ maxWidth: "40px" }}></Box>
          <Typography fontWeight={"bold"} variant={"h5"} color={"white"}>
            Planto.
          </Typography>
        </Grid>
        <HeaderList>
          <HeaderListItem>
            <ListItemButton>Home</ListItemButton>
          </HeaderListItem>
          <HeaderListItem>
            <ListItemButton>Plants Type</ListItemButton>
          </HeaderListItem>
          <HeaderListItem>
            <ListItemButton>More</ListItemButton>
          </HeaderListItem>
          <HeaderListItem>
            <ListItemButton>Contact</ListItemButton>
          </HeaderListItem>
        </HeaderList>
        <HeaderContent>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <LocalMallOutlinedIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </HeaderContent>
      </Grid>
    </HeaderBar>
  );
}
