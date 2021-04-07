import test from 'ava';
import convertHrtime from './index.js';

test('main', t => {
	const time = convertHrtime(process.hrtime.bigint());
	t.is(typeof time.seconds, 'bigint');
	t.is(typeof time.milliseconds, 'bigint');
	t.is(typeof time.nanoseconds, 'bigint');
});
