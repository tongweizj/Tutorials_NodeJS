const express = require("express");
const path = require("path");
const app = express();

app.use("/", (req, res) => {
    res.json({
      project: "React and Express Fullstack project.3",
      from: "MaxTong",
    });
  });
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Fullstack project.",
    from: "MaxTong",
  });
});

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
