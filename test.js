import test from 'ava';
import convertHrtime from './index.js';

test('main', t => {
	const start = process.hrtime.bigint();
	const diff = convertHrtime(process.hrtime.bigint() - start);
	t.log(diff);
	t.is(typeof diff.seconds, 'number');
	t.is(typeof diff.milliseconds, 'number');
	t.is(typeof diff.nanoseconds, 'bigint');
});
