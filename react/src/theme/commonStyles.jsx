
export default theme => ({
    view: {
        margin: 'auto',
        maxWidth: 1200,
    },
    gridItem: {
        // border: '1px solid yellow',
        padding: theme.spacing(0.5)
    },
    map: {
        // border: '1px solid red',
        height: 350,
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
        height: 350,
    },
    pad: {
        // margin: theme.spacing(),
    },
    cardMinHeight: {
        minHeight: 175
    },
    grow: {
        flexGrow: 1,
    },
    avatar: {
        background: 'rgba(255,255,255, 0.125)'
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    padTop: {
        marginTop: theme.spacing()
    },
    centered: {
        textAlign: 'center',
    }
});
