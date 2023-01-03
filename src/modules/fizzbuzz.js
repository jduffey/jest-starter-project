export const fizzbuzz = (n) => {
    if (typeof n !== 'number' || n % 1 !== 0 || n < 1) {
        throw new Error("Input must be a positive integer.");
    }

    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}