const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Middleware to serve uploaded files
app.use("/uploads", express.static("uploads"));
app.use(cors());
// Route to upload an image
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send({
    message: "File uploaded successfully!",
    file: `/uploads/${req.file.filename}`,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
