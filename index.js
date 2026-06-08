import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "server is healthy IN V-5.1",
    status: "success using Docker and GitHub Actions for CI/CD",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
