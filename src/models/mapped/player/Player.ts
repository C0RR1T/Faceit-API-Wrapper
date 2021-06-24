export default interface Player {
    "playerID": string,
    "nickname": string,
    "avatar": string,
    "country": string,
    "coverImage": "",
    "coverFeaturedImage": "",
    "infractions": {
        "lastInfractionDate": Date,
        "afk": number,
        "leaver": number,
        "qmNotCheckedIn": number,
        "qmNotVoted": number
    },
    "platforms": {
        "steam": string
    },
    "games": {
        "csgo": {
            "gameProfileID": string,
            "region": string,
            "regions": {},
            "skillLevelLabel": string,
            "gamePlayerID": string,
            "skillLevel": number,
            "faceitElo": number,
            "gamePlayerName": string
        },
    },
    "settings": {
        "language": string
    },
    "friendsIDs": string[],
    "newSteamID": string,
    "steamID64": string,
    "steamNickname": string,
    "membershipType": string,
    "memberships": string[],
    "faceitURL": string

}