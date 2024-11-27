const Event = require("../models/Events")

exports.createEvent = async (req, res) => {
    const { title, start, end, all_day } = req.body;
    try {
        const event = new Event({ title, start, end, all_day });
        await event.save();
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
