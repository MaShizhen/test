export function add1(a: number, b: number) {
	return a + b;
}

export function add2(a: number) {
	return function add(b: number) {
		return a + b;
	}
}
