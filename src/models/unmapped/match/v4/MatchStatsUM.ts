export default interface MatchStatsUM {
    "rounds": Array<Round>
}

interface Round {
    "best_of": string,
    "competition_id"?: string,
    "game_id": string,
    "game_mode": string,
    "match_id": string,
    "match_round": string,
    "played": string,
    "round_stats": {
        "Rounds": string,
        "Score": string,
        "Winner": string,
        "Region": string,
        "Map": string
    },
    "teams": Array<Team>
}

interface Team {
    "team_id": string,
    "premade": boolean,
    "team_stats": {
        "Second Half Score": string,
        "Team": string,
        "Team Win": string,
        "Team Headshots": string,
        "Final Score": string,
        "Overtime score": string,
        "First Half Score": string
    },
    "players": Array<Player>
}

interface Player {
    "player_id": string,
    "nickname": string,
    "player_stats": PlayerStats
}

interface PlayerStats {
    "Assists": string,
    "Deaths": string,
    "Headshots": string,
    "K/D Ratio": string,
    "Headshots %": string,
    "K/R Ratio": string,
    "MVPs": string,
    "Result": string,
    "Quadro Kills": string,
    "Triple Kills": string,
    "Penta Kills": string,
    "Kills": string
}

export {Round as RoundUM, Team as TeamUM, Player as PlayerUM}