const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Adds feedback to the database
router.post("/", (req, res) => {
    let newFeedbackInfo = req.body;

    console.log("feedback info", newFeedbackInfo);

    let qText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`;

    pool
        .query(qText, [
            newFeedbackInfo.feeling,
            newFeedbackInfo.understanding,
            newFeedbackInfo.support,
            newFeedbackInfo.comments,
        ])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log("Error POSTing to database", err);
            res.sendStatus(500);
        });
});

module.exports = router;