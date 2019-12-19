
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
        // margin: theme.spacing(),
        // width: 'calc(100% - 8px)',
        // background: '#a89a2c',
        // border: '1px solid #a89a2c',
    },
    webcamFull: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    webcamPreview: {
        height: 0,
        paddingTop: '56.25%',
        // border: '1px solid red',
    },
    mapFull: {
        height: 'calc(100vh - 180px)',
        outline: 'none',
    },
    mapPreview: {
        height: 200,
        outline: 'none',
    },
    piJSLogo: {
        height: 45,
        margin: theme.spacing(0.5),
    },
});
