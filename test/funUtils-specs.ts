import * as chai from "chai";

import Utils from '../src/ts/funUtils'

const expect = chai.expect;

describe("funUtils", () => {

    describe('Curry', () => {
        function unaryFunc(a: number){ return a + 1;}
        function binaryFunc(a: number, b: number){ return a + b; }

        it('exists and is therefore awesome!', () => expect(true))

        it('should return expected value for a unary function', () => {
            let curried = Utils.curry(unaryFunc)

            expect(curried(1)).to.equal(2)
            expect(curried(10)).to.equal(11)
        })

        it('should return a function if only patrially applied', () => {
            let curried = Utils.curry(binaryFunc)

            expect(typeof curried(1) === 'function')
            expect(typeof curried(10) === 'function')
        })

        it('should return a value when fully applied', () => {
            let curried = Utils.curry(binaryFunc)

            expect(curried(1,4)).to.equal(5)
            expect(curried(6)(8)).to.equal(14)
        })
    })

    describe('uniteUnaryFilterFuncWithAnd', () => {
        it('should be a function', () => {
            expect(typeof Utils.uniteUnaryFilterFuncWithAnd == 'function')
        })

        it('should return a single function', () => {
            const result = Utils.uniteUnaryFilterFuncWithAnd(a => true, b => true)
            expect(typeof result == 'function')
        })

        it('should return true if both functions return true', () => {
            const composit = Utils.uniteUnaryFilterFuncWithAnd(a => true, b => true)
            expect(composit({})).to.equal(true)
        })

        it('should return false if one given function returns false', () => {
            const composit = Utils.uniteUnaryFilterFuncWithAnd(a => true, b => false)
            expect(composit({})).to.equal(false)
        })
    })

    describe('foldFunction', () => {

        it('should keep function closures that are passed in', () => {
            // function that has its value in a closure
            function returnAFilter(inClosure: any){
                return function(){
                    return !!inClosure;
                }
            }

            const funcs = [
                returnAFilter(true),
                returnAFilter(1),
                returnAFilter(1000),
                returnAFilter(100000)
            ]

            const composit = Utils.foldFunction(Utils.uniteUnaryFilterFuncWithAnd, funcs)
            expect(composit({})).to.equal(true)

            const funcs2 = [
                returnAFilter(true),
                returnAFilter(1),
                returnAFilter(0), // test that will fail the whole thing
                returnAFilter(true)
            ]

            const composit2 = Utils.foldFunction(Utils.uniteUnaryFilterFuncWithAnd, funcs2)
            expect(composit2({})).to.equal(false)

        })

        it('should return true if all functions return true', () => {
            const funcs = [
                (a: any) => true,
                (a: any) => true,
                (a: any) => true,
                (a: any) => true
            ]

            const composit = Utils.foldFunction(Utils.uniteUnaryFilterFuncWithAnd, funcs)
            expect(composit({})).to.equal(true)
        })

        it('should return false if all function return false', () => {
            const funcs = [
                (a: any) => true,
                (a: any) => true,
                (a: any) => false,
                (a: any) => true
            ]

            const composit = Utils.foldFunction(Utils.uniteUnaryFilterFuncWithAnd, funcs)
            expect(composit({})).to.equal(false)
        })

    })
});
