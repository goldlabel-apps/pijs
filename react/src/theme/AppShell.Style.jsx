
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
        // maxWidth: 1200,
        // margin: 'auto',
    },
    mainImage: {
        // border: '1px solid green',
        position: 'absolute',
    },
    environment: {
        position: 'relative',
        top: theme.spacing(),
        left: theme.spacing(),
        // padding: theme.spacing(),
        // borderRadius: theme.spacing(0.5),
        // background: 'rgba(255,255,255,0.65)',
    },
    environmentBtn: {
        marginRight: theme.spacing(),
    },
    mapBtn: {
        // margin: theme.spacing(),
    },
    weather: {
        // border: '1px solid white',
        padding: theme.spacing(),
    },
    tooltipStyle: {
        background: 'red',
    },
    screenCard: {
        boxShadow: 'none',
        marginBottom: 100,
    },
    screenHeader: {
        // background: theme.palette.primary.main,
        // color: theme.palette.secondary.main
    },
    navList: {
        padding: theme.spacing(),
    },

    menuOpenerBtn: {
        position: 'absolute',
        top: theme.spacing(),
        right: theme.spacing(),
    },
    navDrawer: {
        width: 300,
    },
    navDrawerWidth: {
        width: 300,
    },
    piPlayer: {
        // border: '1px solid #a89a2c',
        margin: 'auto',
        textAlign: 'center',
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


    mapPreview: {
        height: 200,
        outline: 'none',
    },
    piJSLogo: {
        height: 30,
        // margin: theme.spacing(0.5),
    },
});
