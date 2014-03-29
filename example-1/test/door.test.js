/*global Door */
/*global chai */

'use strict';

var expect = chai.expect;
var assert = chai.assert;

describe("Door", function() {

	it("Door constructor test", function() {
		var Door1 = new Door(200, 200, 200);
		assert.isObject(Door1);
		var Door2 = new Door(2,2);
		assert.isObject(Door2);
	});

	it("Door build test", function() {
		var Door1 = new Door(2, 2, 1);
		//Door1.getDoor();
		//expect(Door1.build().length).to.equal(1);
		//Door1.destroy();
	});

});
