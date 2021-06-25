import {AxiosInstance} from "axios";
import Matches from "../models/mapped/match/Matches";
import MatchesUM from "../models/unmapped/match/v4/MatchesUM";

export default class MatchService {
    private readonly _axiosInstanceV1: AxiosInstance;
    private readonly _axiosInstanceV4: AxiosInstance;


    public constructor(v1: AxiosInstance, v4: AxiosInstance) {
        this._axiosInstanceV1 = v1;
        this._axiosInstanceV4 = v4;
    }

    public getMatches = async (limit: number = 20, userid: string): Promise<Array<Matches>> => {
        const response = await this._axiosInstanceV4.get<MatchesUM>(`https://open.faceit.com/data/v4/players/${userid}/history?game=csgo&limit=${limit}`)
    }

    public getHistory = async (userid: string, limit: number = 20): Promise<Array<string>> => {
        const response = await this._axiosInstanceV4.get<{ items: Array<{ "match_id": string }> }>(`https://open.faceit.com/data/v4/players/${userid}/history?game=csgo&limit=${limit}`)
        return response.data.items.map(val => val.match_id)
    }

    public getMatchesToday = async (limit: number = 20, userid: string): Promise<Matches> => {
        let response = await this._axiosInstanceV4.get<MatchesUM>(`https://open.faceit.com/data/v4/players/${userid}/history?game=csgo&limit=${limit}`);
        const now = new Date();
        const matchesToday = response.data.items.filter(val => {
            const matchDate = new Date(val.to);
            return (matchDate.getDate() === now.getDate()) && (matchDate.getMonth() === now.getMonth()) && (matchDate.getFullYear() === now.getFullYear())
        })
    }


}