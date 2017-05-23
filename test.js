import test from 'ava';
import m from '.';

test(t => {
	const x = m(process.hrtime());
	t.is(typeof x.seconds, 'number');
	t.is(typeof x.milliseconds, 'number');
	t.is(typeof x.nanoseconds, 'number');
});
