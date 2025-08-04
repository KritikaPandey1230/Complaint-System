import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";

function Dashboard() {
  const [complaints, setComplaints] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    // 🚫 Redirect admin users away from user dashboard
    if (user?.role === "admin") {
      navigate("/admin");
    } else {
      fetchComplaints();
    }
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await API.get("/complaints/my");
      setComplaints(res.data);
    } catch (error) {
      console.error("Error fetching complaints:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/complaints", form);
      fetchComplaints();
    } catch (error) {
      console.error("Error submitting complaint:", error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Complaints</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="title"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border"
        />
        <button className="bg-blue-600 text-white px-4 py-2">Submit</button>
      </form>
      <div className="mt-6 space-y-2">
        {complaints.map((c) => (
          <div key={c._id} className="p-4 border rounded">
            <h4 className="font-semibold">{c.title}</h4>
            <p>{c.description}</p>
            <p>
              Status: <strong>{c.status}</strong>
            </p>
            {c.resolutionNote && <p>Resolution: {c.resolutionNote}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
