const express = require("express");

const app = express();

// Root Route
app.get("/", (req, res) => {
  res.status(200).send("Backend Running Successfully");
});

// Tasks Route
app.get("/api/tasks", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "Complete Deployment",
      status: "Done"
    }
  ]);
});

// Railway Port
const PORT = process.env.PORT || 8080;

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});