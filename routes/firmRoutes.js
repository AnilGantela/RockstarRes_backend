const express = require("express");
const path = require("path");
const verifyToken = require("../middlewares/verifyToken");
const { addFirm, deleteFirmById } = require("../controllers/firmController");

const router = express.Router();

router.post("/add-firm", verifyToken, ...addFirm); // Spread operator to handle middleware array
router.delete("/delete-firm/:firmId", deleteFirmById);

router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(path.join(__dirname, "..", "uploads", imageName));
});

module.exports = router;
