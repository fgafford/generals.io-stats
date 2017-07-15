/// <reference path="../browser.ts" />

// Represents a function that filters games (game filter fuction)
type filterFunc = (item: gameData) => boolean

/**
 * Game stat filters
 * 
 * These are individual filters that users are able to leverage in order
 * to limit the scope of the games that they are getting statisics for.
 */
export default {
    /**
     * DateRange
     * 
     * @method dateRange
     * @param {number} from - filter dates before 'from' data (Unix timestamp in milliseconds)
     * @param {number} to - filter dates after 'to' data (Unix timestamp in milliseconds)
     * 
     * @return {function} a filter function
     */
    dateRange(from: number = Number.NEGATIVE_INFINITY, to: number = Number.POSITIVE_INFINITY): filterFunc {
        return game => (game.started >= from) && (game.started <= to)
    },

    /**
     * Filter by type of game.
     * 
     * @method gameType
     * @param {string} type - the type of game (classic, 1v1, 2v2)
     *
     * @return {function} a filter function
     */
    gameType(type: gameTypes): filterFunc {
        return game => game.type === type
    },

    /**
     * Filter by opponent's presence in game. 
     * Optional Rank param allow filter to return games
     * where a given opponent had a given rank.
     * 
     * Example:
     *  All games where 'myEnemy' won:
     *  opponent('myEnemy', 0)
     * 
     * @method player
     * @param {string} player - name of player present in game
     * @param {string} [rank] - rank of the player
     * 
     * @return {function} a filter function
     */
    player(name: string, rank?: number): filterFunc {
        return game => {            
            if(rank !== undefined){ // rank 0 == false ;)
                const R = game.ranking[rank]
                return R && R.name === name;
            } else {
                for(let finalRank of game.ranking){
                    if(finalRank.name === name) return true;
                }
            }
            return false;
        };
     }

}