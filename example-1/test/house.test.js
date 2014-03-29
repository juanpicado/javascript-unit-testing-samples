/*global House */
/*global chai */
/*global Wall */

'use strict';

var expect = chai.expect;
var assert = chai.assert;

describe("House", function() {

	it("House constructor test", function() {
		var w1 = new Wall(2,2,1);
		var w2 = new Wall(2,2,1);
		var w3 = new Wall(2,2,1);
		var w4 = new Wall(2,2,1);
		var House1 = new House([w1,w2,w3,w4]);
		assert.isObject(House1);
	});

	it("House build test", function() {
		//var House1 = new House(2, 2, 1);
		//House1.getHouse();
		//expect(House1.build().length).to.equal(1);
		//House1.destroy();
	});

});
