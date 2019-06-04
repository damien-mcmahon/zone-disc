import * as utils from './utils';

describe('Utilities', () => {
    describe('getRandomInt', () => {
        const { getRandomInt } = utils;

        it('returns a random int from the specified range', () => {
            const randomInt = getRandomInt(0,3);
            expect(randomInt).toBeGreaterThanOrEqual(0);
            expect(randomInt).toBeLessThanOrEqual(3);
        });
    });

    describe('alphabetise', () => {
        const { alphabetise } = utils;

        it('sorts the given label alphabetically', () => {
            const SAMPLE_DATA = [{
                ISOCurrency: 'GBP',
                CurrencyLabel: 'British Pounds'
            }, {
                ISOCurrency: 'USD',
                CurrencyLabel: 'US Dollars'
            }, {
                ISOCurrency: 'AUD',
                CurrencyLabel: 'Australian Dollars'
            }];
            
            const byCurrency = alphabetise('ISOCurrency');
            SAMPLE_DATA.sort(byCurrency);
            expect(SAMPLE_DATA[0].ISOCurrency).toEqual('AUD');
        });

        it('doesnt change order when values are the same', () => {
            const SAMPLE_DATA = [{
                label: 'A',
                value: 1
            }, {
                label: 'A',
                value: 2
            }];

            const byLabel = alphabetise('label');
            SAMPLE_DATA.sort(byLabel);
            expect(SAMPLE_DATA[0].value).toBe(1);
        });
    });

    describe('optionise', () => {
        const { optionise } = utils;

        it('takes the given values and returns an object', () => {
            const SAMPLE_DATA = [{
                ISOCurrency: 'GBP',
                CurrencyLabel: 'British Pounds'
            }, {
                ISOCurrency: 'USD',
                CurrencyLabel: 'US Dollars'
            }];

            const output = SAMPLE_DATA.map(optionise('CurrencyLabel', 'ISOCurrency'));

            expect(output[0]).toEqual({
                label: 'British Pounds',
                value: 'GBP'
            });
        });
    });

    describe('has', () => {
        const { has } = utils;

        it('returns true for a string', () => {
            expect(has('string')).toBe(true);
        });

        it('returns true for an array with values', () => {
            expect(has([1])).toBe(true);
        });

        it('returns false for an empty string', () => {
            expect(has('')).toBe(false);
        });

        it('returns false for an empty array', () => {
            expect(has([])).toBe(false);
        });
    });
});