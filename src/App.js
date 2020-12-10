import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import './App.css';
import Main from './Components/Main';
// import HomescreenBG from './Images/Homescreen_BG.jpg';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: '100vw',
    height: '100vh',
    margin: '0px',
    // backgroundImage: `url(${HomescreenBG})`,
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    background: "rgba(33, 33, 33, 1);",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>

      <Main />

    </Grid>
  );
}

export default App;