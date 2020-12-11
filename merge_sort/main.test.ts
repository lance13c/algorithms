import { mergeSort } from './main';

describe('merge_sort', () => {
	describe('mergeSort', () => {
		it('should sort an unsorted array of numbers from least to greatest', () => {
			expect(mergeSort([ 3, 2, 1 ])).toEqual([ 1, 2, 3 ]);
			expect(mergeSort([ 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4 ]);
			expect(mergeSort([ 5, 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5 ]);
			expect(mergeSort([ 6, 9, 4, 1 ])).toEqual([ 1, 4, 6, 9 ]);
		});
	});
});
