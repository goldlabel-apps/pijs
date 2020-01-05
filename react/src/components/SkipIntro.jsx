import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PiJSSVG from '../graphics/PiJSSVG';

import { TimelineMax, Power2 } from "gsap";

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
        const timer = setTimeout(() => animate(`pijs-logo`, animationCallback), 100);
        return () => clearTimeout(timer);
    }, []);
    
    function animate(divId, callback) {
        // console.log('animate', divId);
        const div = document.getElementById(divId);
        const timeline = new TimelineMax();
        timeline.to(div, baseDuration * 1, {
            // opacity: '1',
            rotationY: -180,
            ease: Power2.easeOut,
            onComplete: callback,
        });
    }

    function animationCallback() {
        console.log('Do Next Thing');
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
            </div>
        </div>
    );
}

const MemodFuncComponent = React.memo(SkipIntro);
export default MemodFuncComponent;
