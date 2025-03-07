const express = require("express");
const app = express();

// updated for render
app.use(express.static("web"));

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
