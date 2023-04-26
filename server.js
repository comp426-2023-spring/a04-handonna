#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import {rps, rpsls} from "./lib/rpsls.js";

const args = minimist(process.argv.slice(2));
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = args.port || 5000;

//check /app endpoint
app.get('/app/', (req, res) => {
	res.status(200).send('200 OK');
});

//check ednpoint /app/rps/, returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res) => {
	res.status(200).send(rps());
});

//check endpoint /app/rpsls/, returns "player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls/', (req, res) => {
	res.status(200).send(rpsls());
});

// check endpoint /app/rps/play/ (URLEncoded)
app.get('/app/rps/play/', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});

// check endpoint /app/rps/play/ (JSON)
app.post('/app/rps/play/', (req, res) => {
	res.status(200).send(rps(req.body.shot));
});

//check endpoint /app/rpsls/play (URLEncoded)
app.get('/app/rpsls/play/', (req, res) => {
	res.status(200).send(rpsls(req.query.shot));
});

//check endpoint /app/rpsls/play/ (JSON)
app.post('/app/rpsls/play/', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
});

//check endpoint /app/rps/play/(rock|paper|scissors)/
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rps(req.params.shot));
});

//check endpoint /app/rpsls/play/(rock|paper|scissors|lizard|spock)/
app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(rpsls(req.params.shot));
});

//default endpoint
app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});

//start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
