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

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, start, end, all_day } = req.body;
    try {
        const event = await Event.findByIdAndUpdate(
            id,
            { title, start, end, all_day },
            { new: true }
        );
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.json({ message: "Event updated successfully.", event });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndDelete(id);
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.json({ message: "Event deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
