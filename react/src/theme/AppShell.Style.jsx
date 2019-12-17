
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
    webcamImage: {
        height: 'calc(100vh - 140px)'
    },
    webcamImagePreview: {
        height: 300,
        objectFit: 'cover',
    },
    screenCardHeader: {
        // background: 'yellow'
    },
    screenCard: {
        margin: theme.spacing(),
        width: 'calc(100% - 8px)',
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    piJSLogo: {
        height: 45,
        margin: theme.spacing(0.5),
    },

});
