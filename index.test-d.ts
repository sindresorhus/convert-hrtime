/// <reference types="node"/>
import {expectType} from 'tsd';
import convertHrtime = require('.');

const time = convertHrtime(process.hrtime(process.hrtime()));
expectType<convertHrtime.HRTime>(time);
expectType<number>(time.seconds);
expectType<number>(time.milliseconds);
expectType<number>(time.nanoseconds);
