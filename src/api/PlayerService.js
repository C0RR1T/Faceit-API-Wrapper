"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerStatsMapper_1 = __importDefault(require("../mapper/PlayerStatsMapper"));
class MatchService {
    constructor(axiosInstance) {
        this.getPlayerStats = async (username) => {
            if (!this._users[username]) {
                await this.newUser(username);
            }
            const playerStats = await this._axiosInstance.get(`players/${this._users[username]}/stats/csgo`);
            return PlayerStatsMapper_1.default(playerStats.data);
        };
        this._axiosInstance = axiosInstance;
        this._users = {};
    }
    async newUser(username) {
        return this._axiosInstance.get(`players?nickname=${username}`).then(r => {
            this._users = { ...this._users, [username]: r.data.player_id };
        });
    }
}
exports.default = MatchService;
