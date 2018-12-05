const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('POST WORKS');
});

//Important to add below line
//Otherwise getting error --> 'app crashed - waiting for file changes before starting.'
module.exports = router;