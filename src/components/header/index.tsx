import {DropListItem, HeaderBar, HeaderContent, HeaderList, HeaderListItem} from "./styled";
import Logo from "../../assets/icons/logo.png";
import { Box } from "@mui/system";
import {
  Grid,
  IconButton,
  ListItemButton,
  Select, SelectChangeEvent,
  Typography
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";

export default function Header() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
              <Select value="Plant Type" label="Plant Type">
                <DropListItem>ziza plant</DropListItem>
              </Select>
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
