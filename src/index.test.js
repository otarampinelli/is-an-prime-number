const { describe, expect, test } = require('@jest/globals')
const isPrimeNumber = require('./index')

describe('prime number function', () => {
    test("should return true for an prime number", () => {
        expect(isPrimeNumber(971)).toEqual(true)
    })

    test("should return false for a not prime number", () => {
        expect(isPrimeNumber(4)).toEqual(false)
    })

    test("should return an error if the number is not an prime number", () => {
        expect(() => {
            isPrimeNumber("1");
        }).toThrow("Expected a number!");
    });

    test("should return an error if the number is not a positve number", () => {
        expect(() => {
            isPrimeNumber(-1);
        }).toThrow("Expected a positive number!");
    });

    test("should return an error if the number is not an integer number", () => {
        expect(() => {
            isPrimeNumber(1.4);
        }).toThrow("Expected an integer number!");
    });
})
