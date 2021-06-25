import {AxiosInstance} from "axios";
import PlayerStats from "../models/mapped/player/PlayerStats";
import mapPlayerStats from '../mapper/PlayerStatsMapper'
import PlayerUM from "../models/unmapped/player/PlayerUM";
import PlayerStatsUM from "../models/unmapped/player/PlayerStatsUM";


export default class PlayerService {
    private _axiosInstance: AxiosInstance;
    private _users: { [userName: string]: string };

    public constructor(axiosInstance: AxiosInstance) {
        this._axiosInstance = axiosInstance;
        this._users = {};
    }

    public getPlayerStats = async (username: string): Promise<PlayerStats> => {
        if (!this._users[username]) {
            this.newUser(username);
        }
        const playerStats = await this._axiosInstance.get<PlayerStatsUM>(`players/${this._users[username]}/stats/csgo`);
        return mapPlayerStats(playerStats.data);
    }

    public newUser(username: string) {
        this.getUserID(username).then(id => {
            this._users = {
                ...this._users,
                [username]: id
            }
        })
    }

    public getUserID = async (username: string): Promise<string> => {
        if (this._users[username])
            return this._users[username]
        const response = await this._axiosInstance.get<PlayerUM>(`players?nickname=${username}`)
        return response.data.player_id;
    }

}

