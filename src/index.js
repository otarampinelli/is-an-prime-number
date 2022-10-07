'use strict'

module.exports = function isPrimeNumber(num) {
    const REMAINDER = 0

    if (typeof num !== 'number') {
        throw new Error("Expected a number!")
    }

    if (!Number.isInteger(num)) {
        throw new Error('Expected an integer number!')
    }

    if (num < 0) {
        throw new Error('Expected a positive number!')
    }

    for (let i = 2; i < num; i++) {
        if (num % i === REMAINDER) {
            return false
        }
    }

    return true
}

