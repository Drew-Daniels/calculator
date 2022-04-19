import { add, subtract, multiply, divide } from './math.js';

describe('"add" Tests', () => {
    describe('Both positive numbers', () => {
        describe('Both integers', () => {
            describe('Single digits', () => {
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
                test('Adds 9 + 1 to equal 10', () => {
                    expect(add(9, 1)).toBe(10);
                });
                test('Adds 5 + 5 to equal 10', () => {
                    expect(add(5, 5)).toBe(10);
                });
            })
            describe('Double Digits', () => {
                test('Adds 10 + 20 to equal 30', () => {
                    expect(add(10, 20)).toBe(30);
                });
                test('Adds 90 + 10 to equal 100', () => {
                    expect(add(90, 10)).toBe(100);
                });
                test('Adds 50 + 50 to equal 100', () => {
                    expect(add(50, 50)).toBe(100);
                });
            })
            describe('Triple Digits', () => {
                test('Adds 100 + 200 to equal 300', () => {
                    expect(add(100, 200)).toBe(300);
                });
                test('Adds 900 + 100 to equal 1000', () => {
                    expect(add(900, 100)).toBe(1000);
                });
                test('Adds 500 + 500 to equal 1000', () => {
                    expect(add(500, 500)).toBe(1000);
                });
            })
        })
        describe('Both decimals', () => {
            describe('One decimal', () => {
                test('Adds 0.1 + 1 to equal 1.1', () => {
                    expect(add(0.1, 1)).toBe(1.1);
                });
                test('Adds .1 + 1 to equal 1.1', () => {
                    expect(add(.1, 1)).toBe(1.1);
                });
                test('Adds 9.9 + .1 to equal 10', () => {
                    expect(add(9.9, .1)).toBe(10);
                });
            })
            describe('Two decimals', () => {
                test('Adds .01 + 1.00 to equal 1.01', () => {
                    expect(add(.01, 1.00)).toBe(1.01);
                });
                test('Adds 0.01 + 1.00 to equal 1.01', () => {
                    expect(add(0.01, 1.00)).toBe(1.01);
                });
                test('Adds 1.01 + 1.01 to equal 2.02', () => {
                    expect(add(1.01, 1.01)).toBe(2.02);
                });
            })
            describe('Three decimals', () => {
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
            }) 
        })
        describe('Integers and decimals', () => {
            describe('Integer and decimal number of 1 place', () => {
                test('Adds 0.1 + 1 to equal 1.1', () => {
                    expect(add(0.1, 1)).toBe(1.1);
                });
                test('Adds .1 + 1 to equal 1.1', () => {
                    expect(add(.1, 1)).toBe(1.1);
                });
                test('Adds 9.9 + .1 to equal 10', () => {
                    expect(add(9.9, .1)).toBe(10);
                });
            })
            describe('Integer and decimal number of 2 places', () => {
                test('Adds .01 + 1.00 to equal 1.01', () => {
                    expect(add(.01, 1.00)).toBe(1.01);
                });
                test('Adds 0.01 + 1.00 to equal 1.01', () => {
                    expect(add(0.01, 1.00)).toBe(1.01);
                });
                test('Adds 1.01 + 1.01 to equal 2.02', () => {
                    expect(add(1.01, 1.01)).toBe(2.02);
                });
            })
            describe('Integer and decimal number of 3 places', () => {
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
                test('Adds 1 + 2 to equal 3', () => {
                    expect(add(1, 2)).toBe(3);
                });
            })            
        })
    })
    describe('1 positive, 1 negative number', () => {
        // Fill in after 'both positive number' tests complete
    })
    describe('Both negative numbers', () => {
        // Fill in after 'both positive number' tests complete
    })
})