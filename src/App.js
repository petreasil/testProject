
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Header from "./components/header/Header"


function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
