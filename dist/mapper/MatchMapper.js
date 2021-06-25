"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMatches = exports.mapMatch = void 0;
const mapMatches = (um, v1) => {
    const elo = mapV1(v1);
    return um.items.map((val) => mapMatch(val, elo));
};
exports.mapMatches = mapMatches;
const mapMatch = (val, elo) => {
    return {
        "matchID": val.match_id,
        "gameID": val.game_id,
        "region": val.region,
        "matchType": val.match_type,
        "gameMode": val.game_mode,
        "maxPlayers": val.max_players,
        "teamsSize": val.teams_size,
        "teams": {
            "faction2": mapTeams(val.teams.faction2),
            "faction1": mapTeams(val.teams.faction1)
        },
        "playingPlayers": val.playing_players,
        "competitionID": val.competition_id,
        "competitionName": val.competition_name,
        "competitionType": val.competition_type,
        "organizerID": val.organizer_id,
        "status": val.status,
        "startedAt": val.started_at,
        "finishedAt": val.finished_at,
        "results": {
            "winner": val.results.winner,
            "score": {
                "faction2": val.results.score.faction2,
                "faction1": val.results.score.faction1
            }
        },
        "faceit_url": val.faceit_url.replace('{lang}', 'en'),
        "elo": elo[val.match_id]
    };
};
exports.mapMatch = mapMatch;
const mapTeams = (um) => {
    return {
        "teamID": um.team_id,
        "nickname": um.nickname,
        "avatar": um.avatar,
        "type": um.type,
        "players": um.players.map(p => {
            return {
                "playerID": p.player_id,
                "nickname": p.nickname,
                "avatar": p.avatar,
                "skillLevel": p.skill_level,
                "gamePlayerID": p.game_player_id,
                "gamePlayerName": p.game_player_name,
                "faceitURL": p.faceit_url.replace('{lang}', 'en')
            };
        })
    };
};
const mapV1 = (um) => {
    let elo = {};
    um.forEach((val) => {
        elo = {
            ...elo,
            [val._id.matchId]: parseInt(val.elo || '0')
        };
    });
    return elo;
};
