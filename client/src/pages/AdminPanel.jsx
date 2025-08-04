import { useEffect, useState } from "react";
import API from "../utils/axios";

function AdminPanel() {
  const [complaints, setComplaints] = useState([]);
  const [updates, setUpdates] = useState({});
  const [userRole, setUserRole] = useState("");

  const fetchAll = async () => {
    const res = await API.get("/complaints/all");
    setComplaints(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUserRole(decoded.role);
    }
    fetchAll();
  }, []);

  const handleUpdate = (id, field, value) => {
    setUpdates((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleSave = async (id) => {
    const update = updates[id];
    if (!update) return;
    await API.put(`/complaints/${id}`, update);
    setUpdates((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
    fetchAll();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      await API.delete(`/complaints/${id}`);
      fetchAll();
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">All Complaints</h2>
      {complaints.map((c) => (
        <div
          key={c._id}
          className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6 shadow-lg"
        >
          <div className="mb-3">
            <span className="text-blue-400 font-semibold">Title: </span>
            <span className="text-white">{c.title}</span>
          </div>
          <div className="mb-3">
            <span className="text-blue-400 font-semibold">Description: </span>
            <span className="text-white">{c.description}</span>
          </div>
          <div className="mb-3">
            <span className="text-blue-400 font-semibold">Status: </span>
            <span className="text-yellow-400 font-bold">{c.status}</span>
          </div>
          <div className="mb-3">
            <span className="text-blue-400 font-semibold">User: </span>
            <span className="text-white">{c.user?.name}</span>
          </div>

          {userRole === "admin" && (
            <>
              {/* Status Buttons */}
              <div className="flex space-x-2 mb-3">
                {["open", "in progress", "resolved"].map((status) => (
                  <button
                    key={status}
                    className={`px-3 py-1 rounded ${
                      updates[c._id]?.status === status
                        ? "bg-blue-500"
                        : "bg-gray-700"
                    }`}
                    onClick={() => handleUpdate(c._id, "status", status)}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>

              {/* Resolution Note */}
              <textarea
                placeholder="Resolution Note"
                defaultValue={c.resolutionNote}
                onBlur={(e) =>
                  handleUpdate(c._id, "resolutionNote", e.target.value)
                }
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 mb-3"
              />

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  onClick={() => handleSave(c._id)}
                >
                  Save Changes
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(c._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
