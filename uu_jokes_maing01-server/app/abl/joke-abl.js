"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { Profile, AppClientTokenService, UuAppWorkspace, UuAppWorkspaceError } = require("uu_appg01_server").Workspace;
const { UriBuilder } = require("uu_appg01_server").Uri;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const { AppClient } = require("uu_appg01_server");
const Errors = require("../api/errors/joke-errors.js");
const { BinaryStoreError } = require("uu_appg01_binarystore");

const WARNINGS = {
    createUnsupportedKeys: {
        code: `${Errors.Create.UC_CODE}unsupportedKeys`
    },
    getUnsupportedKeys: {
        code: `${Errors.Get.UC_CODE}unsupportedKeys`
    },
};

const expectedStateList = ["active", "underConstruction"]

class JokeAbl {
    constructor() {
        this.validator = Validator.load();
        this.mainDao = DaoFactory.getDao("jokesMain");
        this.jokeDao = DaoFactory.getDao("joke");
        this.jokeImageDao = DaoFactory.getDao("jokeImage");
    }

    async create(uri, dtoIn, session, uuAppErrorMap = {}) {
        const awid = uri.getAwid();
        const uuJokeMain = await this.mainDao.getByAwid(awid)

        // HDS 1
        if (!uuJokeMain) {
            throw new Errors.Create.jokesDoesNotExist({ uuAppErrorMap }, { awid })
        }

        if (uuJokeMain.state !== 'active' && uuJokeMain.state !== 'underConstruction') {
            throw new Errors.Create.jokesIsNotInCorrectState({ uuAppErrorMap }, { expectedStateList, actualState: uuJokeMain.state })
        }

        // HDS-2 
        let jokeImage;
        if (dtoIn.image) {
            try {
                jokeImage = await this.jokeImageDao.create({ awid }, dtoIn.image);
            } catch (e) {
                if (e instanceof BinaryStoreError) { // A3
                    throw new Errors.Create.JokeImageDaoCreateFailed({ uuAppErrorMap }, e);
                }
                throw e;
            }
            dtoIn.image = jokeImage.code;
        }

        const validationResult = this.validator.validate("jokeCreateDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.createUnsupportedKeys.code,
            Errors.Create.InvalidDtoIn
        );

        // HDS-3

        if (dtoIn.image) {
            // {...}
        }

        // HDS4


        // HDS-5

        const uuObject = {...dtoIn,
            awid,
            averageRating: 0,
            ratingCount: 0,
            visibility: false,
            uuIdentity: session.getIdentity().getUuIdentity(),
            uuIdentityName: session.getIdentity().getName()
        };

        let joke = null;

        try {
            joke = await this.jokeDao.create(uuObject);
        } catch (err) {
            throw new Errors.Create.CreateJokeDaoFailed({ uuAppErrorMap }, err);
        }

        // HDS-6
        return {
            uuAppErrorMap,
            ...joke
        }
    }

    async get(awid, dtoIn, session, uuAppErrorMap = {}) {
        let uuJokes = null;

        uuJokes = await this.mainDao.getByAwid(awid);

        if (!uuJokes) {
            throw new Errors.Get.JokesDoesNotExist({ uuAppErrorMap }, { awid });
        }
        // Must be only in active state for testing added state "underConstruction"
        if (uuJokes.state !== "active") {
            throw new Errors.Get.JokesIsNotInCorrectState({ uuAppErrorMap }, { awid });
        }

        // HDS-1 
        const validationResult = this.validator.validate("jokeGetDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.getUnsupportedKeys.code,
            Errors.Get.InvalidDtoIn
        );

        // HDS-2 
        const uuJoke = await this.jokeDao.get(awid, dtoIn.id);
        if (!uuJoke) {
            throw new Errors.Get.JokeDoesNotExist({ uuAppErrorMap }, { joke: dtoIn.id }, { awid });
        }
        // HDS-3 
        return {...uuJoke, uuAppErrorMap };
    }
}



module.exports = new JokeAbl();