import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#5885ce" },
  secondary: { main: "#595959" }
};

const themeName = "GotData";

export default createMuiTheme({
  palette,
  themeName,
  typography: {
    useNextVariants: true
  }
});