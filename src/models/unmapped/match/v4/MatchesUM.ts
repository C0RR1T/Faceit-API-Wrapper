export default interface MatchesUM {
    items: Array<Match>
}

interface Match {
    "match_id": string,
    "game_id": string,
    "region": string,
    "match_type": string,
    "game_mode": string,
    "max_players": number,
    "teams_size": number,
    "teams": {
        "faction2": Team,
        "faction1": Team
    },
    "playing_players": Array<String>,
    "competition_id": string,
    "competition_name": string,
    "competition_type": string,
    "organizer_id": string,
    "status": string,
    "started_at": number,
    "finished_at": number,
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
    "from": number,
    "to": number
}

interface Team {
    "team_id": string,
    "nickname": string,
    "avatar": string,
    "type": string,
    "players": Array<{
        "player_id": string,
        "nickname": string,
        "avatar": string,
        "skill_level": number,
        "game_player_id": string,
        "game_player_name": string,
        "faceit_url": string
    }>
}