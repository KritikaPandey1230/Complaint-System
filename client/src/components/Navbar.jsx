import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // ✅ get user role

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Complaint System</h1>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            {user?.role === "admin" && <Link to="/admin">Admin</Link>}{" "}
            {/* ✅ show only if admin */}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
