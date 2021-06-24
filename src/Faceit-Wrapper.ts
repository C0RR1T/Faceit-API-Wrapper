import axios, {AxiosInstance} from 'axios';

export default class FaceitInstance {
    private _token: string;
    private _axiosInstance: AxiosInstance;
    private _axiosInstanceV1: AxiosInstance;
    private static INSTANCE: FaceitInstance;

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
    }

    public create = (token: string): FaceitInstance => {
        if (FaceitInstance.INSTANCE)
            FaceitInstance.INSTANCE = new FaceitInstance(token)
        return FaceitInstance.INSTANCE;
    }
}