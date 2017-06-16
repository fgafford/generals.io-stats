/// <reference path="../browser.ts" />
/**
 * funUtils
 * 
 * Fun utils are fun! 
 * Mostly helper funcation (completely FP of course) that make 
 * the applicaion fun and run smooth (stateless, points-free, function composition).
 */
module.exports = {
    
    /**
     * Takes 2 functions and retuns a single function that 
     * 
     * @method binaryFuncAnd
     */
    composeFuncAnd(func1: (item: gameData) => boolean, func2: (item: gameData) => boolean): (item: gameData) => boolean{
        return (item: gameData) => func1(item) && func2(item);
    }
}