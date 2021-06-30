import {AxiosInstance} from "axios";
import Match from "../models/mapped/match/Match";
import MatchesUM from "../models/unmapped/match/v4/MatchesUM";
import {mapMatches} from "../mapper/MatchMapper";
import MatchUM from "../models/unmapped/match/v1/MatchUM";
import MatchStatsUM from "../models/unmapped/match/v4/MatchStatsUM";
import Round from "../models/mapped/match/MatchStats";
import mapStatsOfMatch from "../mapper/MatchStatsMapper";

export default class MatchService {
    private readonly _axiosInstanceV1: AxiosInstance;
    private readonly _axiosInstanceV4: AxiosInstance;


    public constructor(v1: AxiosInstance, v4: AxiosInstance) {
        this._axiosInstanceV1 = v1;
        this._axiosInstanceV4 = v4;
    }

    public getMatchOfUser = async (userid: string, limit?: number, offset?: number, from?: number): Promise<Array<Match>> => {
        const request = this._axiosInstanceV4.get<MatchesUM>(this.getQueryString(userid, limit, from, offset))
        const requestV1 = this._axiosInstanceV1.get<Array<MatchUM>>(`https://api.faceit.com/stats/api/v1/stats/time/users/${userid}/games/csgo`)
        const [response, responsev1] = await Promise.all([request, requestV1]);
        return mapMatches(response.data, responsev1.data)
    }

    public getHistory = async (userid: string, limit: number = 20): Promise<Array<string>> => {
        const response = await this._axiosInstanceV4.get<{ items: Array<{ "match_id": string }> }>(`https://open.faceit.com/data/v4/players/${userid}/history?game=csgo&limit=${limit}`)
        return response.data.items.map(val => val.match_id)
    }

    public getMatchesToday = async (userid: string): Promise<Array<Match>> => {
        return await this.getMatchOfUser(userid, undefined, this.getTodayZeroOClock())
    }

    public getEloFromToday = async (userid: string): Promise<number> => {
        const matchesToday = await this.getMatchesToday(userid);
        return matchesToday[matchesToday.length].elo - matchesToday[0].elo
    }

    private getTodayZeroOClock = (): number => {
        const now = new Date();
        now.setHours(0, 0, 0);
        return now.getTime()
    }

    private getStatsOfMatch = async (matchID: string): Promise<Array<Round>> => {
       return this._axiosInstanceV4.get<MatchStatsUM>(`https://open.faceit.com/data/v4/matches/${matchID}/stats`).then(r => r.data).then(r => mapStatsOfMatch(r));
    }

    private getQueryString = (userid: string, limit: number = 20, from?: number, offset ?: number): string => {
        return `https://open.faceit.com/data/v4/players/${userid}/history?game=csgo` + (limit && `&limit=${limit}`) + (from && `&from=${from}`) + (offset && `&offset=${offset}`)
    }


}