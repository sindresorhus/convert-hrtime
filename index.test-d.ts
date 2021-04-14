import {expectType} from 'tsd';
import convertHrtime, {HighResolutionTime} from './index.js';

const time = convertHrtime(process.hrtime.bigint());
expectType<HighResolutionTime>(time);
expectType<number>(time.seconds);
expectType<number>(time.milliseconds);
expectType<bigint>(time.nanoseconds);
