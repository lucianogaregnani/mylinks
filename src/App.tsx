import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Links from "./pages/AdminDashboard/pages/Links/Links";
import Appearance from "./pages/AdminDashboard/pages/Appearance/Appearance";
import { Provider } from "react-redux";
import { store } from "./pages/AdminDashboard/store";
import MyLinks from "./pages/MyLinks/MyLinks";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<Layout />}>
              <Route element={<Links />} path="/admin/links" />
              <Route element={<Appearance />} path="/admin/appearance" />
            </Route>
          </Route>
          <Route element={<MyLinks />} path=":username" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />

          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
