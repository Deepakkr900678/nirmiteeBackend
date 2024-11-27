const express = require("express")
const router = express.Router()

const {
    createEvent,
} = require("../controllers/Events");

router.post("/createEvent", createEvent);

module.exports = router;
