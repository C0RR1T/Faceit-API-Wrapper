import {AxiosInstance} from "axios";
import PlayerStats from "../models/mapped/player/PlayerStats";
import mapPlayerStats from '../mapper/PlayerStatsMapper'


export default class MatchService {
    private _axiosInstance: AxiosInstance;
    private _users: { [userName: string]: string };

    public constructor(axiosInstance: AxiosInstance) {
        this._axiosInstance = axiosInstance;
        this._users = {};
    }

    public getPlayerStats = async (username: string): Promise<PlayerStats> => {
        if (!this._users[username]) {
           await this.newUser(username);
        }
        const playerStats = await this._axiosInstance.get(`players/${this._users[username]}/stats/csgo`);
        return mapPlayerStats(playerStats.data);
    }

    public async newUser(username: string): Promise<void> {
         return this._axiosInstance.get(`players?nickname=${username}`).then(r => {
            this._users = {...this._users, [username]: r.data.player_id}
        })
    }

}