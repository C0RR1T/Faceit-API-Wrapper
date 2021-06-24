export default interface PlayerUM {
    "player_id": string,
    "nickname": string,
    "avatar": string,
    "country": string,
    "cover_image": "",
    "cover_featured_image": "",
    "infractions": {
        "last_infraction_date": "",
        "afk": number,
        "leaver": number,
        "qm_not_checkedin": number,
        "qm_not_voted": number
    },
    "platforms": {
        "steam": string
    },
    "games": {
        "csgo": {
            "game_profile_id": string,
            "region": string,
            "regions": null,
            "skill_level_label": string,
            "game_player_id": string,
            "skill_level": number,
            "faceit_elo": number,
            "game_player_name": string
        },
    },
    "settings": {
        "language": string
    },
    "friends_ids": string[],
    "new_steam_id": string,
    "steam_id_64": string,
    "steam_nickname": string,
    "membership_type": string,
    "memberships": string[],
    "faceit_url": string
}
