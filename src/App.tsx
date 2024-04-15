import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import RedirectRoute from "./components/RedirectRoute";
import Layout from "./components/Layout/Layout";
import Links from "./pages/AdminDashboard/pages/Links/Links";
import Appearance from "./pages/AdminDashboard/pages/Appearance/Appearance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Links />} path="/admin/links" />
          <Route element={<Appearance />} path="/admin/appearance" />
        </Route>

        <Route element={<RedirectRoute />}>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Route>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
