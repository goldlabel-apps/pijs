
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
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
