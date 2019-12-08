import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    view: {
        margin: 'auto'
    },
    pad: {
        // margin: theme.spacing(),
    }
});
