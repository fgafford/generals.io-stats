import * as chai from "chai";

import filters from '../src/ts/filters'
const expect = chai.expect;

describe("filters", () => {

    const games: [gameData] = require('./gameRecords/basicMockGames.json')

    describe('dateRange', () => {
        // Higest index is oldest game
        const timeOf2ndGame = 1497408472494;
        const timeOf3rdGame = 1497408805726; 

        it('should return all dates by default', () => {
            const results = games.filter(filters.dateRange())
            expect(results.length).to.equal(4);
        })

        it('should return games after (inclusive) when from filter set', () => {
            const results = games.filter(filters.dateRange(timeOf3rdGame))
            expect(results.length).to.equal(2);
        })

        it('should return games before (inclusive) when to filter set', () => {
            const results = games.filter(filters.dateRange(0, timeOf3rdGame))
            expect(results.length).to.equal(3);
        })
    })

    describe('gameType', () => {
        it('should only return correct count of selected game types', () => {
            const results1 = games.filter(filters.gameType('classic'))
            expect(results1.length).to.equal(2);

            const results2 = games.filter(filters.gameType('1v1'))
            expect(results2.length).to.equal(2);

            const results3 = games.filter(filters.gameType('2v2'))
            expect(results3.length).to.equal(0);
        })
    })

    describe('player', () => {
        it('should only return games that player was in', () => {
            const results1 = games.filter(filters.player("[Bot] Tripir v0.42"))
            expect(results1.length).to.equal(1);

            const results2 = games.filter(filters.player("[Bot]EklipZ_ai"))
            expect(results2.length).to.equal(3);
        })

        it('should only return games where player finished with a given rank when specified', () => {
            const results1 = games.filter(filters.player("[Bot]EklipZ_ai", 0))
            expect(results1.length).to.equal(2);

            const results2 = games.filter(filters.player("[Bot]EklipZ_ai", 1))
            expect(results2.length).to.equal(1);

            // should not break on index out of bounds (thanks dynamicly typed Javascript!)
            const results3 = games.filter(filters.player("[Bot]EklipZ_ai", 5))
            expect(results3.length).to.equal(0);
        })
    })
    
});
