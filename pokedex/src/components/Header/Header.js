import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PageContext } from "../../constants/context";
import { pageData } from "../../constants/pageData";
import { Link } from "react-router-dom";

export default function Header() {
  const {page, setPage} = useContext(PageContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={pageData[page].path}>
            <Button onClick={()=>setPage(pageData[page].nextPage)} variant="contained" color="secondary">
              {pageData[page].button}
            </Button>
          </Link>
          <Typography
            align="center"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {pageData[page].title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
