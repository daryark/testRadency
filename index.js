function loadGrain(levels) {
	return levels
		.reduce(
			(acc, el, i) =>
				i === 0 || i === levels.length - 1 || (levels[i - 1] < el && el > levels[i + 1])
					? [...acc, i]
					: acc,
			[]
		)
		.reduce((acc, elI, i, arr) => {
			const minorPeak = levels[elI] > levels[arr[i + 1]] ? levels[arr[i + 1]] : levels[elI];

			for (let f = elI + 1; f < arr[i + 1]; f += 1) {
				acc += minorPeak - levels[f];
			}
			return acc;
		}, 0);
}

function Test(...args) {
	args.map((el, i) => {
		console.log(`Test ${i + 1}: ${loadGrain(el)} grains`);
	});
}

//c: Приклади тестів
Test(
	[4, 1, 3], //2
	[2, 1, 5, 2, 7, 4, 10], //7
	[2, 0, 1, 5, 2, 7], //6
	[2, 4, 2], //0
	[7, 4], //0
	[] //0
);
