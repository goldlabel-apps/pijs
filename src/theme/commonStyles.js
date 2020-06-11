import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  app: {
    // background: "red"
  },
  card: {
    border: "none",
    boxShadow: "none",
    background: "none"
  },
  flex: {
    display: "flex"
  },
  fullViewport: {
    height: "100vh",
    width: "100vw"
  },
  appInner: {
    margin: theme.spacing(),
    color: theme.palette.text.main
  },
  btn: {
    margin: theme.spacing()
  },
  fingerprint: {
    margin: theme.spacing()
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}))
