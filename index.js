'use strict';
module.exports = function (hrtime) {
	var ns = hrtime[0] * 1e9 + hrtime[1];
	var ms = ns / 1e6;
	var s = ns / 1e9;

	return {
		s: s,
		ms: ms,
		ns: ns
	};
};
