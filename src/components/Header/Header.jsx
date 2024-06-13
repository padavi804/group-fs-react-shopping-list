import React from 'react';
import './Header.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Button, Icon } from '@mui/material';





function Header() {
  
    return (
        <React.Fragment>
        <Container  maxWidth="sm">
        
            
            <header className="banner-header">
                <h1 >My Shopping List</h1>
                <AddShoppingCartOutlinedIcon/>
            </header>
        </Container>

        
   

        </React.Fragment>
    );
}

export default Header;
