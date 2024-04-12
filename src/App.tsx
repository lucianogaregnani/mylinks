import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectRoute from "./components/RedirectRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminDashboard />} />
        </Route>
        <Route element={<RedirectRoute />}>
          <Route element={<Login />} />
          <Route element={<Register />} />
        </Route>
        <Route element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
