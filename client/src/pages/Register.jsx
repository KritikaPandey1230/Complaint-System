import { useState } from "react";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default role
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration error");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <select
          name="role"
          onChange={handleChange}
          className="w-full p-2 border"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}

export default Register;
