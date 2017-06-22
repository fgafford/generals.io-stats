/// <reference path="../browser.ts" />
// Generic filter function type
type filterFunc = (item: any) => boolean
type unifyFunc = (func1: (item: any) => any, func2: (item: any) => any) => any

/**
 * funUtils
 * 
 * Fun utils are fun! 
 * Mostly helper funcation (completely FP of course) that make 
 * the applicaion fun and run smooth (stateless, points-free, function composition).
 */
export default {

    /**
     * Takes a unifying function and applies all passed in functions with the unifiying function.
     * This function recursivly applies passed in funcs to the unifiying function 
     * till a single function is retuned. 
     * 
     * It is more or less reduces an array of functions with a passed in unifying function
     * 
     * @method ...
     * 
     * @return
     */
     foldFunction(unifyFunc: unifyFunc, funcs: {(item: any):any}[]): (item: any) => any {
        // I guess it will work in absence of pattern matching....
        switch(funcs.length){
            case 0:
                throw 'Error: minimum of one function required';
            case 1: // we can technically fulfill the contract if one 1 function provided
                return funcs[0]
            case 2: // True base case
                return unifyFunc(funcs[0], funcs[1])
            default: // Where we recurse
                return unifyFunc(funcs[0], this.foldFunction(unifyFunc, funcs.slice(1)))
        }
    },

    /**
     * Takes 2 functions and retuns a single function that 
     * 
     * This allows us to lazily evaluate functions with use of the '&&' operator.
     * 
     * @method uniteUnaryFilterFuncWithAnd
     * 
     * @return {function} // TODO: tell more
     */
    uniteUnaryFilterFuncWithAnd(func1: filterFunc, func2: filterFunc): filterFunc{
        return (item: any) => func1(item) && func2(item);
    }
}