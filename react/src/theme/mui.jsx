
// light yellow #fff1bb
// javascript yellow #F1DD3F
// javascript grey #333333

const theme = {
    palette: {
        "type": "light",
        primary: {
            main: '#333333',
        },
        secondary: {
            main: '#F1DD3F',
        },
        background: {
            default: "#F1DD3F",
            paper: "#F1DD3F",
            appBar: "#F1DD3F",
            contentFrame: "#F1DD3F"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
            icon: "rgba(0, 0, 0, 0.38)",
            divider: "rgba(0, 0, 0, 0.12)",
            lightDivider: "rgba(0, 0, 0, 0.075)",
        },
        input: {
            "helperText": "rgba(0, 0, 0, 0.54)",
            "labelText": "rgba(0, 0, 0, 0.54)",
            "inputText": "rgba(0, 0, 0, 0.87)",
            "disabled": "rgba(0, 0, 0, 0.42)"
        },
        action: {
            "active": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.26)"
        },
    }
}

export default theme;