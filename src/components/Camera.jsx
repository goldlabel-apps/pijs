import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import commonStyles from '../theme/commonStyles'
import { useSelector } from 'react-redux'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import {
    Button,
    Card,
    CardContent,
    IconButton,
} from '@material-ui/core/'
import { Icon } from './' 

const useStyles = makeStyles(theme => ({
    card: {
        border: "none",
        boxShadow: "none",
        background: "none"
    },
    content: {
        maxHeight: 450,
        overflow: 'hidden'
    },
    cameraControlBar: {
        textAlign: 'center',
        margin: theme.spacing(),
    },
    image: {
        width: '100%'
    },
    btnTxt:{
        marginLeft: theme.spacing(),
    }
}));

export default function Camera() {
    // const classesCommon = commonStyles()
    const classes = useStyles()
    const {
        app,
        camera,
    } = useSelector(state => state)
    const { zoomLevel } = camera.controls
    
    const { src } = app.camera
    return (
        <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
                <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                       
                        <TransformComponent>
                            <img
                                className={classes.image}
                                alt={`Camera`}
                                onLoad={(e) => {
                                    //store.dispatch({ type: `CAMERA/LOADED` })
                                }}
                                onError={(error) => {
                                    console.log(error)
                                    //store.dispatch({ type: `CAMERA/ERROR` })
                                }}
                                src={src}
                            />
                        </TransformComponent>


                         <div className={classes.cameraControlBar}>

                         <Button 
                            variant={`text`}
                            onClick={zoomIn}
                            color={`inherit`}>
                            <Icon icon={`zoomIn`} />
                            <span className={classes.btnTxt}>
                                Zoom In
                            </span>
                        </Button>

                        <Button 
                            variant={`text`}
                            onClick={zoomOut}
                            color={`inherit`}>
                            <Icon icon={`zoomOut`} />
                            <span className={classes.btnTxt}>
                                ZoomOut
                            </span>
                        </Button>

                        <Button 
                            variant={`text`}
                            onClick={resetTransform}
                            color={`inherit`}>
                            <Icon icon={`reset`} />
                            <span className={classes.btnTxt}>
                                Reset
                            </span>
                        </Button>
                        </div>


                        </React.Fragment>
                    )}
                </TransformWrapper>
                    
                    {zoomLevel !== 0 ? 
                        <React.Fragment>
                          <IconButton 
                            edge={`start`}
                            color={`inherit`}
                            aria-label={'Pan Left'}>
                            <Icon icon={`panLeft`} />
                          </IconButton>
                          <IconButton 
                            edge={`start`}
                            color={`inherit`}
                            aria-label={'Pan Right'}>
                            <Icon icon={`panRight`} />
                          </IconButton>
                          <IconButton 
                            edge={`start`}
                            color={`inherit`}
                            aria-label={'Pan Up'}>
                            <Icon icon={`panUp`} />
                          </IconButton>
                          <IconButton 
                            edge={`start`}
                            color={`inherit`}
                            aria-label={'Pan Down'}>
                            <Icon icon={`panDown`} />
                          </IconButton>
                        </React.Fragment>
                    : null}
            </CardContent>
        </Card>
    );
}


/*
<AppBar position={`static`}>
    <Toolbar className={classes.cameraControlBar}>
    </Toolbar>
</AppBar>
*/
