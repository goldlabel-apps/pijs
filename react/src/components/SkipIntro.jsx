import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PiJSSVG from '../graphics/PiJSSVG';
import { TimelineMax, Power2 } from "gsap";
import {
    Typography,
} from '@material-ui/core/';

const baseDuration = 1;

const useStyles = makeStyles(theme => ({
    stage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#212121',
    },
    logo: {
        width: 300,
        height: 300,
    },
    svg: {
        height: '100%',
        width: '100%',
    }
}));

function SkipIntro(props) {
    const classes = useStyles();
    useEffect(() => {
        const timer = setTimeout(() => animate(`pijs-logo`, animationCallback), 250);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer2 = setTimeout(() => animate2(`pijs-logo-text`, animationCallback2), 700);
        return () => clearTimeout(timer2);
    }, []);

    function animate2(divId, callback) {
        const div = document.getElementById(divId);
        const timeline = new TimelineMax();
        timeline.set(div, {
            opacity: '0',
            scaleX: 0.1,
            scaleY: 0.1,
            y: -175,
        });
        timeline.to(div, baseDuration * 1.5, {
            opacity: '1',
            ease: Power2.easeOut,
            scaleX: 0.5,
            scaleY: 0.5,
            y: -160,
            x: -18,
            onComplete: callback,
        });
    }
    
    function animate(divId, callback) {
        const div = document.getElementById(divId);
        const timeline = new TimelineMax();
        timeline.set(div, {
            opacity: '0',
            scaleX: 0.1,
            scaleY: 0.1,
            y: -75,
        });

        timeline.to(div, baseDuration * 1.5, {
            opacity: '1',
            rotationY: -180,
            ease: Power2.easeOut,
            scaleX: 0.5,
            scaleY: 0.5,
            y: -60,
            onComplete: callback,
        });
    }

    function animationCallback() {
        // console.log('Do Next Thing');
    }

    function animationCallback2() {
        // console.log('Do last Thing');
    }

    return (
        <div className={classes.stage}>
            <div className={classes.logo}>
                <PiJSSVG
                    style={{
                        opacity: 0,
                    }}
                    id={`pijs-logo`}
                />
                <Typography
                    variant={`h1`}
                    style={{
                        opacity: 0,
                        color: 'white',
                        textAlign: 'center',
                    }}
                    id={`pijs-logo-text`}>
                    <span style={{
                        color: '#F1DD3F',
                    }}>PiJS</span>.app
                </Typography>
            </div>
        </div>
    );
}

const MemodFuncComponent = React.memo(SkipIntro);
export default MemodFuncComponent;
