
export default theme => ({
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
        height: 350,
    },
    grow: {
        flexGrow: 1,
    },
    avatar: {
        // background: 'rgba(188,17,66, 0.125)'
        background: 'rgba(255,255,255, 0.125)'
    },
    gridItem: {
        // border: '1px solid yellow',
        padding: theme.spacing(0.5)
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
