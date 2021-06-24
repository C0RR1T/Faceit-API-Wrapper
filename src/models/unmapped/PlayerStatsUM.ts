export default interface PlayerStatsUM {
    "player_id": string,
    "game_id": string,
    "lifetime": {
        "Recent Results": string[],
        "Matches": string,
        "Total Headshots %": string,
        "Current Win Streak": string,
        "Average K/D Ratio": string,
        "Wins": string,
        "K/D Ratio": string,
        "Win Rate %": string,
        "Average Headshots %": string,
        "Longest Win Streak": string
    },
    "segments": Array<Segment>
}

interface Segment {
    "stats": {
        "Average Deaths": string,
        "Headshots per Match": string,
        "Triple Kills": string,
        "Quadro Kills": string,
        "Average Triple Kills": string,
        "Average Quadro Kills": string,
        "Total Headshots %": string,
        "Average Headshots %": string,
        "Penta Kills": string,
        "Kills": string,
        "Deaths": string,
        "Average Assists": string,
        "Average Kills": string,
        "Headshots": string,
        "Matches": string,
        "Win Rate %": string,
        "Rounds": string,
        "Average MVPs": string,
        "Average K/R Ratio": string,
        "Assists": string,
        "MVPs": string,
        "Wins": string,
        "K/R Ratio": string,
        "Average K/D Ratio": string,
        "K/D Ratio": string,
        "Average Penta Kills": string
    },
    "type": string,
    "mode": string,
    "label": string,
    "img_small": string,
    "img_regular": string

}

export {Segment}