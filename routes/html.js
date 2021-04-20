const router = require("express").Router();
const path = require("path");

//HTML route to the exercise.html file
router.get("/exercise", (req,res) =>  {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//HTML route to the exercise.html file
router.get("/stats", (req,res) =>  {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;