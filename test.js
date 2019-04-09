import test from 'ava';
import convertHrtime from '.';

test('main', t => {
	const x = convertHrtime(process.hrtime());
	t.is(typeof x.seconds, 'number');
	t.is(typeof x.milliseconds, 'number');
	t.is(typeof x.nanoseconds, 'number');
});
