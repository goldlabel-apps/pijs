
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
    },
    mapPreview: {
        height: 300,
    },
    mapFull: {
        height: 'calc(100vh - 140px)'
    },
    webcamFull: {
        height: 'calc(100vh - 140px)',
    },
    webcamPreview: {
        height: 300,
        // objectFit: 'cover',
    },
    screenCard: {
        margin: theme.spacing(),
        width: 'calc(100% - 8px)',
        background: '#a89a2c'
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    piJSLogo: {
        height: 45,
        margin: theme.spacing(0.5),
    },

});
