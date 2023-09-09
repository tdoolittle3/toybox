// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TypedComponent from './TypedComponent';

const Header = () => {
  return (
    <AppBar position="static" style={{backgroundColor: 'white'}}>
      <Toolbar style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
        <img src='img/main_logo.svg' alt='Joeys Toy Box Main Logo' height={150} />
        <Typography variant="h6"><TypedComponent /></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;