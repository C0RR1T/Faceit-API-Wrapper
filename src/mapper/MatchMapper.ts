import MatchesUM, {Team as TeamUM, MatchUM} from "../models/unmapped/match/v4/MatchesUM";
import Match, {Team} from "../models/mapped/match/Match";
import MatchUMV1 from "../models/unmapped/match/v1/MatchUM";

const mapMatches = (um: MatchesUM, v1: Array<MatchUMV1>): Array<Match> => {
    const elo: {[matchId: string]: number} = mapV1(v1);
    return um.items.map((val) => mapMatch(val, elo))
}

const mapMatch = (val: MatchUM, elo: {[matchId: string]: number}): Match => {
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
    }
}


const mapTeams = (um: TeamUM): Team => {
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
            }
        })
    }
}

const mapV1 = (um: Array<MatchUMV1>): {[matchId: string]: number} => {
    let elo: {[matchId: string]: number} = {};
    um.forEach((val) => {
        elo = {
            ...elo,
            [val._id.matchId]: parseInt(val.elo || '0')
        }
    })
    return elo;
}

export {mapMatch, mapMatches};