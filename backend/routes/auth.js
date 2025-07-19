const express = require("express");
const router = express.Router();

// Example login route
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    // Validate credentials with DB here
    res.json({ message: "Login successful", email });
});

module.exports = router;