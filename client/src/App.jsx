import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";

const ProtectedAdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role === "admin" ? children : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminPanel />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
