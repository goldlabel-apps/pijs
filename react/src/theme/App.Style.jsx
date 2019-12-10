import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    view: {
        margin: 'auto',
        maxWidth: 1200,
    },
    pad: {
        // margin: theme.spacing(),
    }
});
