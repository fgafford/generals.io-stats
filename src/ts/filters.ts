/// <reference path="../browser.ts" />


type filterFunc = (item: gameData) => boolean

/**
 * Game stat filters
 * 
 * These are individual filters that users are able to leverage in order
 * to limit the scope of the games that they are getting statisics for.
 */
export default {
    // by time

    // type of game (need to research all types)

    /**
     * 
     */
     opponent(player: String, ranking?: Number): filterFunc {
        return (game: gameData) => {
            return true;
        };
     }

    // 
}