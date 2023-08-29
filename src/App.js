import React from 'react';
import './App.css';
import { Container, Grid, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>

      <div className="App gradient-background">
        <Header />    
        <Main />

        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
