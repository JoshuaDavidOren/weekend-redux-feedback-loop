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

// GET all feedback that have been placed.
router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error GET ', err);
        res.sendStatus(500);
    });
})

router.delete('/:id', (req, res) => {
    qText = 'DELETE FROM "feedback" WHERE "id" = $1';
    pool
        .query(qText, [req.params.id])
        .then((result) => {
            console.log(qText);
            console.log(req.params.id);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log("Error DELETing", err);
            res.sendStatus(500);
        });
})

module.exports = router;