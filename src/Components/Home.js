import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core'
import './Styling/Home.css';
import ProfilePic from '../Images/ProfilePic.jpg';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const useStyles = makeStyles((theme) => ({
    background: {
        width: '100vw',
        minHeight: '93vh',
        margin: '0px',
    },
    text: {
        color: "#f1f1f1",
        padding: "0px",
        width: "100%",
    },
    textItem: {
        padding: 10,
    },
    imageItem: {
        width: '100%',
    }
}));

function Home() {
    const classes = useStyles();
    const [props, set] = useSpring(() => ({ xys: [2, 4, 1], config: { mass: 10, tension: 350, friction: 40 } }))
    return (
        <Grid container justify="center" alignItems="center" className={classes.background} >

            {/* Inhoud tekst */}
            <Grid item container justify="center" alignItems="center" xs={12} md={6} className={classes.text} >
                <Grid item container alignContent="center" justify="center" className={classes.textItem}>
                    <Grid item>
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [2, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Hi, I'm Furkan Öztürk
                            </Typography>
                            <Typography variant="body1" >
                                I'm a front-end developer and UI/UX designer.
                        </Typography>
                        </animated.div>
                    </Grid>
                </Grid>
            </Grid>

            {/* Profiel foto */}
            <Grid container item xs={8} md={6} className={classes.imageItem} alignItems="center" justify="center">

                <img className="image" src={ProfilePic} alt="profilePhoto" />

            </Grid>

        </Grid>
    );
}

export default Home;