import CssBaseline from "@mui/material/CssBaseline";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Header from "./components/header/Header";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Leftbar from "./components/Leftbar/Leftbar";
import { Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={10}>
          <Routes>
            <Route path="/" >
            <Route index element={<Dashboard/> }/>
            <Route path="login" element={<Login />} /> 
            <Route path="register" element={<Register />} />     
            </Route>
            {/*<Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>*/}
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
