/**
 * Sorts the array from least to greatest
 * @param n - An array of unsorted numbers
 */
export function mergeSort(n: number[]): number[] {
	if (n.length <= 1) {
		return n;
	}

	const halfN = Math.floor(n.length / 2);

	const c: number[] = mergeSort(n.slice(0, halfN));
	const d: number[] = mergeSort(n.slice(halfN, n.length));

	return _merge(c, d);
}

/**
 * Takes two sorted arrays and combines them in order least to greatest
 * @param {number[]} a - a sorted array
 * @param {number[]} b - a sorted array
 */
export function _merge(a: number[], b: number[]): number[] {
	let i: number = 0;
	let j: number = 0;
	const output: number[] = [];
	const n = a.length + b.length;
	for (let k = 0; k < n; k += 1) {
		if (b[i] === undefined) {
			// push a[j] if b[i] is undefined
			output.push(a[j]);
			j += 1;
		} else if (a[j] === undefined) {
			// push b[i] if a[j] is undefined
			output.push(b[i]);
			i += 1;
		} else if (a[j] < b[i]) {
			// push a[j] if less than b[i]
			output.push(a[j]);
			j += 1;
		} else {
			// push b[i] if less than a[j]
			output.push(b[i]);
			i += 1;
		}
	}

	return output;
}
