import test from 'ava';
import fn from './';

test(t => {
	const x = fn(process.hrtime());
	t.is(typeof x.s, 'number');
	t.is(typeof x.ms, 'number');
	t.is(typeof x.ns, 'number');
});
