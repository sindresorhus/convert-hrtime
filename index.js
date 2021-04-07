export default function convertHrtime(hrtime) {
	const nanoseconds = hrtime;
	const milliseconds = nanoseconds / 1000000n;
	const seconds = nanoseconds / 1000000000n;

	return {
		seconds,
		milliseconds,
		nanoseconds
	};
}
