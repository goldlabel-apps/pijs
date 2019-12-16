
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    appShell: {
        // border: '1px solid red'
    },
    piJSLogo: {
        height: 45,
        margin: theme.spacing(0.5),
    },
    nav: {
        paddingTop: 100
    }
});
