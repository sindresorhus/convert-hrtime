import test from 'ava';
import convertHrtime from '.';

test('main', t => {
	const time = convertHrtime(process.hrtime());
	t.is(typeof time.seconds, 'number');
	t.is(typeof time.milliseconds, 'number');
	t.is(typeof time.nanoseconds, 'number');
});
