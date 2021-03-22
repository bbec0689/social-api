const router = require("express").Router();
const API = require("./api");

router.use("/api/v1", API);

module.exports = router;