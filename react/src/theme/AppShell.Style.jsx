
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
        margin: 'auto',
        maxWidth: 800,
    },
    navCallout: {
        // margin: theme.spacing(),
    },
    navDrawer: {
    },
    screenCard: {
        margin: theme.spacing(),
        // width: 'calc(100% - 8px)',
        // background: '#a89a2c',
    },
    webcamFull: {
        height: 450,
    },
    webcamPreview: {
        height: 300,
        // objectFit: 'cover',
    },
    mapFull: {
        height: 'calc(100vh - 180px)',
        outline: 'none',
    },
    mapPreview: {
        height: 300,
        outline: 'none',
    },
    piJSLogo: {
        height: 45,
        margin: theme.spacing(0.5),
    },
});
