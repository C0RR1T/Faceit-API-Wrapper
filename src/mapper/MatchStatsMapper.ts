import MatchStatsUM, {RoundUM, TeamUM, PlayerUM} from "../models/unmapped/match/v4/MatchStatsUM";
import MatchStats, {Player, Team} from "../models/mapped/match/MatchStats";
import Round from "../models/mapped/match/MatchStats";


const mapStatsOfMatch = (um: MatchStatsUM): Array<MatchStats> => {
    return um.rounds.map(mapRound)
}

const mapRound = (um: RoundUM): Round => {
    return {
        "bestOf": um.best_of,
        "competitionID": um.competition_id,
        "gameID": um.game_id,
        "gameMode": um.game_mode,
        "matchId": um.match_id,
        "matchRound": um.match_round,
        "played": um.played,
        "roundStats": {
            "rounds": um.round_stats.Rounds,
            "score": um.round_stats.Score,
            "winner": um.round_stats.Winner,
            "region": um.round_stats.Region,
            "map": um.round_stats.Map
        },
        "teams": um.teams.map(mapTeam)
    }
}

const mapTeam = (um: TeamUM): Team => {
    return {
        "teamId": um.team_id,
        "premade": um.premade,
        "teamStats": {
            "secondHalfScore": um.team_stats["Second Half Score"],
            "team": um.team_stats.Team,
            "teamWin": um.team_stats["Team Win"],
            "teamHeadshots": um.team_stats["Team Headshots"],
            "finalScore": um.team_stats["Final Score"],
            "overtimeScore": um.team_stats["Overtime score"],
            "firstHalfScore": um.team_stats["First Half Score"]
        },
        "players": um.players.map(mapPlayer)
    }
}

const mapPlayer = (um: PlayerUM): Player => {
    return {
        "playerId": um.player_id,
        "nickname": um.nickname,
        "playerStats": {
            "assists": um.player_stats.Assists,
            "deaths": um.player_stats.Deaths,
            "headshots": um.player_stats.Headshots,
            "kdRatio": um.player_stats["K/D Ratio"],
            "headshotsPercentage": um.player_stats["Headshots %"],
            "krRatio": um.player_stats["K/R Ratio"],
            "mvps": um.player_stats.MVPs,
            "result": um.player_stats.Result,
            "quadrokills": um.player_stats["Quadro Kills"],
            "tripleKills": um.player_stats["Triple Kills"],
            "pentaKills": um.player_stats["Penta Kills"],
            "kills": um.player_stats.Kills
        }
    }
}