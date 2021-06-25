import axios, {AxiosInstance} from 'axios';
import PlayerService from "./api/PlayerService";
import MatchService from "./api/MatchService";
import PlayerStats from "./models/mapped/player/PlayerStats";

export default class FaceitInstance {
    private static INSTANCE: FaceitInstance;
    private readonly _token: string;
    private readonly _axiosInstance: AxiosInstance;
    private readonly _axiosInstanceV1: AxiosInstance;
    private _playerService: PlayerService;
    private _matchService: MatchService;

    private constructor(token: string) {
        this._token = token;
        this._axiosInstance = axios.create({
            baseURL: 'https://open.faceit.com/data/v4/',
            headers: {
                Authentication: this._token
            }
        })
        this._axiosInstanceV1 = axios.create({
            baseURL: 'https://api.faceit.com/stats/api/v1'
        })
        this._playerService = new PlayerService(this._axiosInstance);
        this._matchService = new MatchService(this._axiosInstanceV1, this._axiosInstance);
    }

    public getPlayerStats = (username: string): Promise<PlayerStats> => {
        return this._playerService.getPlayerStats(username);
    }

    public create = (token: string): FaceitInstance => {
        if (FaceitInstance.INSTANCE)
            FaceitInstance.INSTANCE = new FaceitInstance(token)
        return FaceitInstance.INSTANCE;
    }
}