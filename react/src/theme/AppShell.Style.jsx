
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
    },
    piPlayer: {
        border: '1px solid #a89a2c',
    },

    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
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
