"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapPlayerStats = (um) => {
    return {
        "playerID": um.player_id,
        "gameID": um.game_id,
        "lifetime": {
            "recentResults": um.lifetime["Recent Results"],
            "matches": um.lifetime.Matches,
            "totalHSPercentage": um.lifetime["Total Headshots %"],
            "currentWinStreak": um.lifetime["Current Win Streak"],
            "averageKD": um.lifetime["Average K/D Ratio"],
            "wins": um.lifetime.Wins,
            "kdRatio": um.lifetime["K/D Ratio"],
            "winRatePercentage": um.lifetime["Win Rate %"],
            "averageHSPercentage": um.lifetime["Average Headshots %"],
            "longestWinStreak": um.lifetime["Longest Win Streak"]
        },
        "segments": mapSegments(um.segments)
    };
};
const mapSegments = (um) => {
    return um.map((seg) => {
        const stats = seg.stats;
        return {
            "stats": {
                "averageDeaths": stats["Average Deaths"],
                "headShotsPerMatch": stats["Headshots per Match"],
                "tripleKills": stats["Triple Kills"],
                "quadroKills": stats["Quadro Kills"],
                "averageTripleKills": stats["Average Triple Kills"],
                "averageQuadroKills": stats["Average Quadro Kills"],
                "totalHeadshotPercentage": stats["Total Headshots %"],
                "averageHeadShotPercentage": stats["Average Headshots %"],
                "pentaKills": stats["Penta Kills"],
                "kills": stats.Kills,
                "deaths": stats.Deaths,
                "averageAssists": stats["Average Assists"],
                "averageKills": stats["Average Kills"],
                "headshots": stats.Headshots,
                "matches": stats.Matches,
                "WinRatePercentage": stats["Win Rate %"],
                "rounds": stats.Rounds,
                "averageMVPs": stats["Average MVPs"],
                "AverageKDRatio": stats["Average K/D Ratio"],
                "assists": stats.Assists,
                "MVPs": stats.MVPs,
                "wins": stats.Wins,
                "KRRatio": stats["K/R Ratio"],
                "averageKDRatio": stats["Average K/D Ratio"],
                "KDRatio": stats["K/D Ratio"],
                "averagePentaKills": stats["Average Penta Kills"]
            },
            "type": seg.type,
            "mode": seg.mode,
            "label": seg.label,
            "imgSmall": seg.img_small,
            "imgRegular": seg.img_regular
        };
    });
};
exports.default = mapPlayerStats;
