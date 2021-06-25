"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const PlayerService_1 = __importDefault(require("./api/PlayerService"));
const MatchService_1 = __importDefault(require("./api/MatchService"));
class FaceitInstance {
    constructor(token) {
        this.getPlayerStats = (username) => {
            return this._playerService.getPlayerStats(username);
        };
        this.create = (token) => {
            if (FaceitInstance.INSTANCE)
                FaceitInstance.INSTANCE = new FaceitInstance(token);
            return FaceitInstance.INSTANCE;
        };
        this._token = token;
        this._axiosInstance = axios_1.default.create({
            baseURL: 'https://open.faceit.com/data/v4/',
            headers: {
                Authentication: this._token
            }
        });
        this._axiosInstanceV1 = axios_1.default.create({
            baseURL: 'https://api.faceit.com/stats/api/v1'
        });
        this._playerService = new PlayerService_1.default(this._axiosInstance);
        this._matchService = new MatchService_1.default();
    }
}
exports.default = FaceitInstance;
