
export default theme => ({
    card: {
        // border: '1px solid black',
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.5),
    },
    map: {
        height: 183,
        outline: 'none',
    },
    cardStuff: {
        height: 185,
        overflow: 'hidden'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    btnIconPadRight: {
        marginLeft: theme.spacing(),
        paddingRight: theme.spacing(),
    },

    inPageBtn: {
        paddingRight: theme.spacing(),
        marginRight: theme.spacing(),
    },

    white: {
        color: 'white',
    },
    padIcon: {
        padding: theme.spacing(),
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    },
    grow: {
        flexGrow: 1,
    }
});
