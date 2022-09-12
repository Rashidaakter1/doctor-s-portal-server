const express = require("express");
const router = express.Router();

router.get("/tools", async (req, res) => {
  const result = await toolCollection.find().toArray();
  res.json(result);
});

module.exports = router;
