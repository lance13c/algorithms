/**
 * Finds the multiple of the two numbers
 * @param {Number} x - a number >= 10 
 * @param {*} y - a number >= 10
 */
export function karaMult(x, y): number {
	const yN = ('' + y).length;
	const xN = ('' + x).length;

	const nMax = Math.max(yN, xN);

	if (xN === 1 && yN === 1) {
		return x * y;
	}

	const [ a, b ] = _splitNumber(x);
	const [ c, d ] = _splitNumber(y);

	const ac = karaMult(a, c);
	const ad = karaMult(a, d);
	const bc = karaMult(b, c);
	const bd = karaMult(b, d);

	return Math.pow(10, nMax) * ac + Math.pow(10, nMax / 2) * (ad + bc) + bd;
}

/**
 * Returns two
 * @param {*} x - The number to divide into two
 * @return {number[]} - Returns the different halfs in the form of [a,b]. 'a' being the first half, and 'b' being the second.
 */
export function _splitNumber(x: number): [number, number] {
	if (('' + x).length === 1) {
		return [ x, 0 ];
	}
	const numAsString: string = '' + x;
	const numOfDigits = Math.floor(numAsString.length / 2);
	const a: number = parseInt(numAsString.substring(0, numOfDigits));
	const b: number = parseInt(numAsString.substring(numOfDigits, numAsString.length));

	return [ a, b ];
}
