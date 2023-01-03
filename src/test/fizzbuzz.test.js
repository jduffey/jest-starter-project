import { fizzbuzz } from '../modules/fizzbuzz';

describe(fizzbuzz.name, () => {
    describe('returns "FizzBuzz" when input is divisible by 3 and 5', () => {
        it.each([
            [15],
            [30],
            [45],
            [60],
        ])
            ("%s", (n) => {
                expect(fizzbuzz(n)).toBe('FizzBuzz');
            });
    });

    describe('returns "Fizz" when input is divisible by 3', () => {
        it.each([
            [3],
            [6],
            [9],
            [12],
        ])
            ("%s", (n) => {
                expect(fizzbuzz(n)).toBe('Fizz');
            });
    });

    describe('returns "Buzz" when input is divisible by 5', () => {
        it.each([
            [5],
            [10],
            [20],
            [25],
        ])
            ("%s", (n) => {
                expect(fizzbuzz(n)).toBe('Buzz');
            });
    });

    describe('returns input when input is not divisible by 3 or 5', () => {
        it.each([
            [1],
            [2],
            [4],
            [7],
        ])
            ("%s", (n) => {
                expect(fizzbuzz(n)).toBe(n);
            });
    });

    describe('throws when input is not a positive integer', () => {
        it.each([
            [0],
            [-1],
            [1.5],
            [NaN],
            [undefined],
            [null],
            [{}],
            [[]],
            [() => { }],
        ])
            ("%s", (n) => {
                expect(() => fizzbuzz(n)).toThrow("Input must be a positive integer.");
            });
    });
});