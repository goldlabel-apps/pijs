
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    view: {
        maxWidth: 800,
        margin: 'auto'
    },
    pad: {
        margin: theme.spacing(),
    }
});
