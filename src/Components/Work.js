import React from 'react';
import { Grid, makeStyles, Paper, Typography, Card, CardActionArea } from '@material-ui/core';
// Logo's
import JSLogo from '../Images/js_logo.png';
import CSSLogo from '../Images/css_logo.png';
import HTMLLogo from '../Images/html_logo.png';
import ReactLogo from '../Images/react_logo.png';
import FirebaseLogo from '../Images/firebase_logo.png';
import PythonLogo from '../Images/python_logo.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        height: "100%",
        background: "#fafafa",
        '&:hover': {
            background: 'linear-gradient(45deg, #cf4141 30%, #FF8E53 90%)',
        }
    },
    mainContainer: {
        width: '100vw',
        paddingTop: 10,
        overflow: 'auto',
    },
    card: {
        height: 'auto',
        width: "80%",
        transition: '.5s',
        '&:hover': {
            transition: '.3s',
            transform: 'scale(1.1)',
        }
    },
    logo: {
        maxHeight: 40,
    },
    desc: {
        paddingTop: 10,
    },
    gridItem: {
        height: 'auto',
        paddingBottom: 15,
    },
    caa: {
        height: "100%",
    }
}));

function Projects() {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.mainContainer}
            direction="column"
            alignItems="flex-start"
        >

            {/* Projects cards Container  */}
            <Grid container justify="flex-start" alignItems="stretch">

                {/* HTML Card */}
                <Grid item container justify="center" xs={12} sm={6} md={4} className={classes.gridItem} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.caa}>
                            <Paper className={classes.paper} >
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" >
                                            HTML
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={HTMLLogo} alt="HTMLlogo" className={classes.logo} />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.desc}>
                                    <Typography variant="body2" align="left" gutterBottom>
                                        Most of my early school projects were done in HTML. I have a firm understanding of it.
                                    </Typography>
                                    <Typography variant="overline" align="left">
                                        HTML
                                    </Typography>
                                </Grid>
                            </Paper>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* CSS Card */}
                <Grid item container justify="center" xs={12} sm={6} md={4} className={classes.gridItem} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.caa}>
                            <Paper className={classes.paper}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" >
                                            CSS
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={CSSLogo} alt="CSS logo" className={classes.logo} />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.desc}>
                                    <Typography variant="body2" align="left" gutterBottom>
                                        CSS has been used in all of the projects that I've done. Lately I've been using inline styling most of the times.
                                    </Typography>
                                    <Typography variant="overline" align="left">
                                        CSS, Inline Styling
                                    </Typography>
                                </Grid>
                            </Paper>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* JS card */}
                <Grid item container justify="center" xs={12} sm={6} md={4} className={classes.gridItem} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.caa}>
                            <Paper className={classes.paper}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" >
                                            Javascript
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={JSLogo} alt="JS logo" className={classes.logo} />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.desc}>
                                    <Typography variant="body2" align="left" gutterBottom>
                                        As is the case with HTML and CSS, I've used vanilla JS a lot in my early projects. I'd still like to expand my knowledge about functions and practice it more.
                                    </Typography>
                                    <Typography variant="overline" align="left">
                                        Javascript
                                    </Typography>
                                </Grid>
                            </Paper>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* React card */}
                <Grid item container justify="center" xs={12} sm={6} md={4} className={classes.gridItem} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.caa}>
                            <Paper className={classes.paper} >
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" >
                                            React
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={ReactLogo} alt="React logo" className={classes.logo} />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.desc}>
                                    <Typography variant="body2" align="left" gutterBottom>
                                        In later projects I've grown fond of React and have been using it the most paired with Material UI. React is my go-to framework and the one I feel the most comfortable in. This portfolio site of mine is also made in React together with Material UI.
                                    </Typography>
                                    <Typography variant="overline" align="left">
                                        React, Node, Material UI, JSX
                                    </Typography>
                                </Grid>
                            </Paper>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Firebase card */}
                <Grid item container justify="center" xs={12} sm={6} md={4} className={classes.gridItem} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.caa}>
                            <Paper className={classes.paper} >
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" >
                                            Firebase
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={FirebaseLogo} alt="Firebase logo" className={classes.logo} />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.desc}>
                                    <Typography variant="body2" align="left" gutterBottom>
                                        For one of my projects for a client, I've used Firebase to save personal data of multiple accounts. I had practiced with adding, deleting and manipulating data on and from Firebase.
                                    </Typography>
                                    <Typography variant="overline" align="left">
                                        Firebase, React, Data
                                    </Typography>
                                </Grid>
                            </Paper>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Python card */}
                <Grid item container justify="center" xs={12} sm={6} md={4} className={classes.gridItem} >
                    <Card className={classes.card}>
                        <CardActionArea className={classes.caa} onClick={() => { window.open('https://drive.google.com/drive/folders/1ELDtlUnp3reLzYD28Kdq0ZQcwJ63GOct?usp=sharing'); }}>
                            <Paper className={classes.paper} >
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" >
                                            Python
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={PythonLogo} alt="Python logo" className={classes.logo} />
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.desc}>
                                    <Typography variant="body2" align="left" gutterBottom>
                                        To automate my roller shutter in front of my sleepingroom window, I've used Raspberry Pi together with Python to control to automatically raise and lower it when I woke up and went to sleep.
                                    </Typography>
                                    <Typography variant="overline" align="left">
                                        Raspberry-Pi, Python, Hardware
                                    </Typography>
                                </Grid>
                            </Paper>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default Projects;