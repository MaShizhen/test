export function add1(a: number, b: number) {
	return a + b;
}

export function add2(a: number) {
	return function add(b: number) {
		return a + b;
	}
}

export function add3(a: number, b: number) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 3000);
	});
}
