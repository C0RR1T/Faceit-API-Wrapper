export default interface Matches {
    items: Array<Match>
}

interface Match {
    "matchID": string,
    "gameID": string,
    "region": string,
    "matchType": string,
    "gameMode": string,
    "maxPlayers": number,
    "teamsSize": number,
    "teams": {
        "faction2": Team,
        "faction1": Team
    },
    "playingPlayer": Array<String>,
    "competitionID": string,
    "competitionName": string,
    "competitionType": string,
    "organizerID": string,
    "status": string,
    "startedAt": number,
    "finishedAt": number,
    "results": {
        "winner": string,
        "score": {
            "faction2": number,
            "faction1": number
        }
    },
    "faceit_url": string,
    "start": number,
    "end": number,
    "from": Date,
    "to": Date,
    "eloDiff" ?: number
}

interface Team {
    "teamID": string,
    "nickname": string,
    "avatar": string,
    "type": string,
    "players": Array<{
        "playerID": string,
        "nickname": string,
        "avatar": string,
        "skillLevel": number,
        "gamePlayerID": string,
        "gamePlayerName": string,
        "faceitURL": string
    }>
}