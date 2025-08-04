const express = require("express");
const {
  createComplaint,
  getUserComplaints,
  getAllComplaints,
  updateComplaintStatus,
  deleteComplaint,
} = require("../controllers/complaintController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

router.post("/", authMiddleware, createComplaint);
router.get("/my", authMiddleware, getUserComplaints);
router.get("/all", authMiddleware, adminOnly, getAllComplaints);
router.put("/:id", authMiddleware, adminOnly, updateComplaintStatus);
router.delete("/:id", authMiddleware, deleteComplaint);

module.exports = router;
