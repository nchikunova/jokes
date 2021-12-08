"use strict";
const JokesMainUseCaseError = require("./jokes-main-use-case-error.js");
const JOKE_ERROR_PREFIX = `${JokesMainUseCaseError.ERROR_PREFIX}joke/`;

const Create = {
    UC_CODE: `${JOKE_ERROR_PREFIX}create/`,

    InvalidDtoIn: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },

    jokesDoesNotExist: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}invalidDtoIn`;
            this.message = "jokes does not exist";
        }
    },


    jokesIsNotInCorrectState: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}invalidDtoIn`;
            this.message = "jokes is not in correct state.";
        }
    },

    CreateJoke: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}createJokeFailed`;
            this.message = "Joke food .";
        }
    },
    JokeDaoCreateFailed: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}jokeDaoCreateFailed`;
            this.message = "Create of joke by joke Dao create failed.";
        }
    }
}

const Get = {
    UC_CODE: `${JOKE_ERROR_PREFIX}get/`,

    InvalidDtoIn: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Get.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },

    JokesDoesNotExist: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Get.UC_CODE}jokesDoesNotExist`;
            this.message = "jokesDoesNotExist.";
        }
    },
    JokeDoesNotExist: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Get.UC_CODE}jokeDoesNotExist`;
            this.message = "jokeDoesNotExist.";
        }
    },
    JokesIsNotInCorrectState: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Get.UC_CODE}jokesIsNotInCorrectState`;
            this.message = "jokesIsNotInCorrectState.";
        }
    },

 

};

const GetImageData = {
    UC_CODE: `${JOKE_ERROR_PREFIX}getImageData/`,

    InvalidDtoIn: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${GetImageData.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    JokeImageDoesNotExist: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${GetImageData.UC_CODE}jokeImageDoesNotExist`;
            this.message = "Object jokeImage does not exist.";
        }
    }
};

const List = {
    UC_CODE: `${JOKE_ERROR_PREFIX}list/`,
    InvalidDtoIn: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
};

const Update = {
    UC_CODE: `${JOKE_ERROR_PREFIX}update/`,
    InvalidDtoIn: class extends JokesMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Update.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
};

module.exports = {
    Create,
    Get,
    GetImageData,
    List,
    Update
};