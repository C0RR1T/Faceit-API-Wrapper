"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchMapper_1 = require("../mapper/MatchMapper");
class MatchService {
    constructor(v1, v4) {
        this.getMatchOfUser = async (userid, limit, offset, from) => {
            const request = this._axiosInstanceV4.get(this.getQueryString(userid, limit, from, offset));
            const requestV1 = this._axiosInstanceV1.get(`https://api.faceit.com/stats/api/v1/stats/time/users/${userid}/games/csgo`);
            const [response, responsev1] = await Promise.all([request, requestV1]);
            return MatchMapper_1.mapMatches(response.data, responsev1.data);
        };
        this.getHistory = async (userid, limit = 20) => {
            const response = await this._axiosInstanceV4.get(`https://open.faceit.com/data/v4/players/${userid}/history?game=csgo&limit=${limit}`);
            return response.data.items.map(val => val.match_id);
        };
        this.getMatchesToday = async (userid) => {
            return await this.getMatchOfUser(userid, undefined, this.getTodayZeroOClock());
        };
        this.getEloFromToday = async (userid) => {
            const matchesToday = await this.getMatchesToday(userid);
            return matchesToday[matchesToday.length].elo - matchesToday[0].elo;
        };
        this.getTodayZeroOClock = () => {
            const now = new Date();
            now.setHours(0, 0, 0);
            return now.getTime();
        };
        this.getStatsOfMatch = async () => {
        };
        this.getQueryString = (userid, limit = 20, from, offset) => {
            return `https://open.faceit.com/data/v4/players/${userid}/history?game=csgo` + (limit && `&limit=${limit}`) + (from && `&from=${from}`) + (offset && `&offset=${offset}`);
        };
        this._axiosInstanceV1 = v1;
        this._axiosInstanceV4 = v4;
    }
}
exports.default = MatchService;
