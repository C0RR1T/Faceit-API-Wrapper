import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://open.faceit.com/data/v4/',
    headers: {
        Authentication: 'f634076b-4d72-4192-9b84-9351059a1228'
    }
})
export default axiosInstance;

export const getMatchURL = (playerID: string): string => {
    return `https://api.faceit.com/stats/api/v1/stats/time/users/${playerID}/games/csgo`
}