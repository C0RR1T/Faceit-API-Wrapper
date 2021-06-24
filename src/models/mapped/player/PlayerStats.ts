export default interface PlayerStats {
    "playerID": string,
    "gameID": string,
    "lifetime": {
        "recentResults": string[],
        "matches": string,
        "totalHSPercentage": string,
        "currentWinStreak": string,
        "averageKD": string,
        "wins": string,
        "kdRatio": string,
        "winRatePercentage": string,
        "averageHSPercentage": string,
        "longestWinStreak": string
    },
    "segments": Array<Segment>
}

interface Segment {
    "stats": {
        "averageDeaths": string,
        "headShotsPerMatch": string,
        "tripleKills": string,
        "quadroKills": string,
        "averageTripleKills": string,
        "averageQuadroKills": string,
        "totalHeadshotPercentage": string,
        "averageHeadShotPercentage": string,
        "pentaKills": string,
        "kills": string,
        "deaths": string,
        "averageAssists": string,
        "averageKills": string,
        "headshots": string,
        "matches": string,
        "WinRatePercentage": string,
        "rounds": string,
        "averageMVPs": string,
        "AverageKDRatio": string,
        "assists": string,
        "MVPs": string,
        "wins": string,
        "KRRatio": string,
        "averageKDRatio": string,
        "KDRatio": string,
        "averagePentaKills": string
    },
    "type": string,
    "mode": string,
    "label": string,
    "imgSmall": string,
    "imgRegular": string
}

export {Segment}

