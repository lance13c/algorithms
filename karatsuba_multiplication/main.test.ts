import { _splitNumber, karaMult } from './main';

describe('karatsuba_multiplication', () => {
	describe('_splitNumber', () => {
		it('should divid an even digit number in the middle into two smaller numbers', () => {
			expect(_splitNumber(12)).toEqual([ 1, 2 ]);
			expect(_splitNumber(1234)).toEqual([ 12, 34 ]);
			expect(_splitNumber(123456)).toEqual([ 123, 456 ]);
		});

		it('should divid an odd digit number in the middle resulting in two numbers, the later having more digits than the first', () => {
			expect(_splitNumber(123)).toEqual([ 1, 23 ]);
			expect(_splitNumber(12345)).toEqual([ 12, 345 ]);
			expect(_splitNumber(1234567)).toEqual([ 123, 4567 ]);
		});
	});

	describe('karaMult', () => {
		it('should return the product of the two numbers with power of 2 digits', () => {
			expect(karaMult(2, 2)).toBe(4);
			expect(karaMult(12, 34)).toBe(12 * 34);
			expect(karaMult(1234, 5678)).toBe(1234 * 5678);
		});
		// it('should return the product of the two numbers of any digit length', () => {
		// 	expect(karaMult(123, 456)).toBe(123 * 456);
		// });
	});
});
