
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
    },
    webcamImage: {
        height: 'calc(100vh - 140px)'
    },
    webcamImagePreview: {
        height: 0,
        paddingTop: '35%', // 16:9
    },
    screenCard: {
        margin: theme.spacing(),
        width: 'calc(100% - 8px)',
    },
    piJSLogo: {
        height: 45,
        margin: theme.spacing(0.5),
    },
    nav: {

    }
});
