require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mediaHandler = require("./routes/media.routes");

app.use(express.json());
app.use("/api/v1", mediaHandler);

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
