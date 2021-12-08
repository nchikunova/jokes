"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeController {

  update(ucEnv) {
    return JokeAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return JokeAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
    create(ucEnv) {
        return JokeAbl.create(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
    }
    get(ucEnv) {
        return JokeAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    }

    async getImageData(ucEnv) {
        let dtoIn = ucEnv.getDtoIn();
        let dtoOut = await JokeAbl.getImageData(ucEnv.getUri().getAwid(), dtoIn);
        return ucEnv.setBinaryDtoOut(dtoOut, dtoIn.contentDisposition);
    }
}

module.exports = new JokeController();