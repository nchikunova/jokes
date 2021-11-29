"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeController {
    create(ucEnv) {
        return JokeAbl.create(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
    }
    get(ucEnv) {
        return JokeAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    }
}

module.exports = new JokeController();