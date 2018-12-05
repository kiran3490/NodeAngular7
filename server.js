const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'dist/NodeAndAngular7/index.html'));
});

const port = process.env.port || 4600;

app.listen(port, (req, res) => {
    console.log(`RUNNING ${port}`);
});