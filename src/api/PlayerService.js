"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerStatsMapper_1 = __importDefault(require("../mapper/PlayerStatsMapper"));
class PlayerService {
    constructor(axiosInstance) {
        this.getPlayerStats = async (username) => {
            if (!this._users[username]) {
                this.newUser(username);
            }
            const playerStats = await this._axiosInstance.get(`players/${this._users[username]}/stats/csgo`);
            return PlayerStatsMapper_1.default(playerStats.data);
        };
        this.getUserID = async (username) => {
            if (this._users[username])
                return this._users[username];
            return this._axiosInstance.get(`players?nickname=${username}`).then((r) => {
                return r.data.player_id;
            });
        };
        this._axiosInstance = axiosInstance;
        this._users = {};
    }
    newUser(username) {
        this.getUserID(username).then(id => {
            this._users = {
                ...this._users,
                [username]: id
            };
        });
    }
}
exports.default = PlayerService;
