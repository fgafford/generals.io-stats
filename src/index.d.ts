/**
 * Game type (classic, 1v1, 2v2)
 */
declare enum gameTypes {
    'classic',
    '1v1',
    '2v2    '
}

interface player {
    name: string,
    stars: number
}

/**
 * Single game "replay" record. Holds data about
 * player ranking (1st, 2nd, 3rd...) and each 
 * involved player
 */
declare interface gameData {
    type: gameTypes
    id: string
    started: number
    turns: number
    ranking: player[]
}

/**
 * GameData filter function
 */
declare function gameDataFilter(game: gameData): Boolean;