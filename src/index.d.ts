/**
 * Game type (classic, 1v1, 2v2)
 */
declare type gameTypes = 'classic' | '1v1' | '2v2'

/**
 * Single game "replay" record. Holds data about
 * player ranking (1st, 2nd, 3rd...) and each 
 * involved player
 */
declare interface gameData {
    type: 'classic' | '1v1' | '2v2'
    id: string
    started: number
    turns: number
    ranking: [{
        name: string,
        stars: number
    }]
}

/**
 * GameData filter function
 */
declare function gameDataFilter(game: gameData): Boolean;