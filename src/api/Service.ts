import axios from "./AxiosUtility";
import StatsOfMatch from "../models/match/StatsOfMatch";
import FaceitMatch from "../models/match/FaceitMatch";

export default class Service {
    private _username: string;

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
        this.getPlayerID();
    }

    private _playerID: string;

    get playerID(): string {
        return this._playerID;
    }

    public getPlayerID = () => {
        if (this._username) {
            axios.get<{ player_id: string }>(`players/${this._username}`).then(r => {
                this._playerID = r.data.player_id;
            })
        }
    }

    public getMatchesToday = (): StatsOfMatch[] => {

    }

    private mapMatch = (match: FaceitMatch): StatsOfMatch => {
        return {
            map: string,
            score: string,
            result: string,
            elo: string,
            kills: number,
            deaths: number,
            killDeath: number,
            eloDiff: number
        }
    }

    private getMatches = (limit: number = 0): StatsOfMatch[] => {

    }

    private isToday = (unix: number): boolean => {
        const today = new Date();
        const matchDate = new Date(unix);
        return today.getDate() === matchDate.getDate() && today.getMonth() === matchDate.getMonth() && today.getFullYear() === matchDate.getFullYear();
    }


}