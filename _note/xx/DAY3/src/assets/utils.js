export function delay(interval = 1000) {
	return new Promise(rsolve => {
		setTimeout(() => {
			rsolve();
		}, interval);
	});
}