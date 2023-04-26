var args = require('minimist')(process.argv.slice(2));
const express = require('express');
const app = express();
const rpsls = require('./lib/rpsls.js');

var port;
if (args.port === undefined) {
    port = 5000;
}
else {
    port = args.port;
}

app.use(express.json());

app.get("/app", (req, res) => {
    res.status(200);
    res.send("200 OK");
});

app.get("/app/rps", (req, res) => {
    res.status(200);
    res.json(rpsls.rps());
});

app.get("/app/rpsls", (req, res) => {
    res.status(200);
    res.json(rpsls.rpsls());
});

app.get("/app/rps/play", (req, res) => {
    res.status(200);
    res.json(rpsls.rps(req.query.shot));
});

app.post("/app/rps/play", (req, res) => {
    res.status(200);
    res.json(rpsls.rps(req.body.shot));
});

app.get("/app/rpsls/play", (req, res) => {
    res.status(200);
    res.json(rpsls.rpsls(req.query.shot));
});

app.post("/app/rpsls/play", (req, res) => {
    res.status(200);
    res.json(rpsls.rpsls(req.body.shot));
});

app.get("/app/rps/play/:shot(rock|paper|scissors)", (req, res) => {
    res.status(200);
    res.json(rpsls.rps(req.params.shot));
});

app.get("/app/rpsls/play/:shot(rock|paper|scissors|lizard|spock)", (req, res) => {
    res.status(200);
    res.json(rpsls.rpsls(req.params.shot));
});


app.get("*", (req, res) => {
    res.status(404);
    res.send("404 NOT FOUND");
});

app.listen(port, function (err) {
    if(err){
        console.log("Error while starting server");
    }
    else{
        console.log("Server has been started at "+port);
    }
});
