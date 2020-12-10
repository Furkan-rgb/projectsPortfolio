import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import { HashRouter, NavLink, Switch, Route } from 'react-router-dom';
import './Styling/Menu.css';
import Home from './Home';
import Work from './Work.js';
import About from './About';
import { motion } from "framer-motion"

// React prefereert inline styles, zie bijv: https://reactjs.org/docs/dom-elements.html
// Het is makkelijk en snel, maar een external CSS is beter op de lange termijn omdat je dezelfde styling niet overal opnieuw hoeft te typen
// Waarom ik het minder ga doen: https://stackoverflow.com/questions/38545219/how-to-apply-css-and-styling-to-a-react-component
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(255, 255, 255, .1)',
    },
    menuItem: {
        padding: 10,
        paddingBottom: 25,
        fontSize: '60%',
    },
    menu: {
        backgroundColor: 'rgba(37, 37, 37, 1)',
        height: '7vh',
    },
    content: {
        maxWidth: 1920,
        // height: "100%",
    }

}));


function Main() {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="flex-start" className={classes.root}>

            {/* Menu routing */}
            <Grid item container direction="row" justify="center" >
                <HashRouter>
                    <Grid item container
                        justify="center"
                        xs={12}
                        className={classes.menu}
                    >
                        <Grid item className={classes.menuItem} align="center" xs={4} sm={1}>
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                                <NavLink exact to="/">Home</NavLink>
                            </motion.div>
                        </Grid>
                        <Grid item className={classes.menuItem} align="center" xs={4} sm={1}>
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                                <NavLink to="/Work">Work</NavLink>
                            </motion.div>
                        </Grid>
                        <Grid item className={classes.menuItem} align="center" xs={4} sm={1}>
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                                <NavLink to="/About">About</NavLink>
                            </motion.div>
                        </Grid>
                    </Grid>

                    {/* De content */}
                    <Grid item container className={classes.content}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Work" component={Work} />
                            <Route path="/About" component={About} />
                        </Switch>
                    </Grid>

                </HashRouter>
            </Grid>
        </Grid>

    )
}

export default Main;