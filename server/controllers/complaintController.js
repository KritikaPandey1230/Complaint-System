const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(complaint);
  } catch (err) {
    res.status(500).json({ message: "Error creating complaint" });
  }
};

exports.getUserComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user.id });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Error fetching complaints" });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate("user", "name email");
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Error fetching all complaints" });
  }
};

exports.updateComplaintStatus = async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, resolutionNote: req.body.resolutionNote },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating complaint" });
  }
};
exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    await complaint.deleteOne();
    res.json({ message: "Complaint deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting complaint", error: err.message });
  }
};
