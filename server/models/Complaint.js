const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ["open", "in progress", "resolved"],
    default: "open",
  },
  resolutionNote: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", complaintSchema);
