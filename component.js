'use strict';

var MiniOps = require('miniops');

module.exports = {
	enable: true,

	name: 'miniops',

	beforeRoute: function (elefrant, server) {
		// Create a MiniOps instance
		var miniOps = new MiniOps();

		// Register MiniOps data hub
		server.get('/ops', miniOps.dataHub());

		// Register MiniOps recorder
		server.on('after', miniOps.recorder());

		return true;
	}
};
