/// <reference path="../browser.ts" />
/// <reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />

/**
 * Gets the ranking of a player in a given game.
 * 
 * @method playerRanking
 * @param {string} player - name of player to get ranking of
 * @param {gameData} game - game to get ranking from.
 * 
 * @return {int|undefined} - ranking of player in game 
 */
function playerRanking(player: string, game: gameData): number {
    return game.ranking.findIndex(g => g.name === player);
}

export default {

    /**
     * Gets a count of all number of games at each avaliable rank
     * 
     * @method rankingCount
     */
    rankingCount(player: string, games: gameData[]): number[] {
        return games.reduce((acc, game) => {
            acc[playerRanking(player, game)]++
            return acc;
        }, [0]);
    }
}