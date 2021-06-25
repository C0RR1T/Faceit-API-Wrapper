export default interface Round {
    "bestOf": string,
    "competitionID"?: string,
    "gameID": string,
    "gameMode": string,
    "matchId": string,
    "matchRound": string,
    "played": string,
    "roundStats": {
        "rounds": string,
        "score": string,
        "winner": string,
        "region": string,
        "map": string
    },
    "teams": Array<Team>
}

interface Team {
    "teamId": string,
    "premade": boolean,
    "teamStats": {
        "secondHalfScore": string,
        "team": string,
        "teamWin": string,
        "teamHeadshots": string,
        "finalScore": string,
        "overtimeScore": string,
        "firstHalfScore": string
    },
    "players": Array<Player>
}

interface Player {
    "playerId": string,
    "nickname": string,
    "playerStats": PlayerStats
}

interface PlayerStats {
    "assists": string,
    "deaths": string,
    "headshots": string,
    "kdRatio": string,
    "headshotsPercentage": string,
    "krRatio": string,
    "mvps": string,
    "result": string,
    "quadrokills": string,
    "tripleKills": string,
    "pentaKills": string,
    "kills": string
}

export {Player, Team}