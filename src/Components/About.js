import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import underConstruction from "../Images/underConstruction.png";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '93vh',
    },
    text: {
        color: "#f1f1f1",
    },
    image: {
        maxWidth: "100%",
    }
}));

function About() {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item align="center" xs={12} md={12} >
                <Typography variant="h3" className={classes.text}>
                    Under Construction
                </Typography>
                <img src={underConstruction} alt="construction" className={classes.image} />
            </Grid>
        </Grid>
    );
}

export default About;