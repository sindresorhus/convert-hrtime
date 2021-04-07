import {expectType} from 'tsd';
import convertHrtime, {HighResolutionTime} from './index.js';

const time = convertHrtime(process.hrtime.bigint());
expectType<HighResolutionTime>(time);
expectType<bigint>(time.seconds);
expectType<bigint>(time.milliseconds);
expectType<bigint>(time.nanoseconds);
