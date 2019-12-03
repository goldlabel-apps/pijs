
import commonStyles from "./commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    view: {
        maxWidth: 460,
        margin: 'auto'
    },
    pad: {
        margin: theme.spacing(),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
});
