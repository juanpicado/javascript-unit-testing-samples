/*global Wall */
/*global chai */

'use strict';

var expect = chai.expect;
var assert = chai.assert;

describe("wall", function() {

	it("wall constructor test", function() {
		var wall1 = new Wall(200, 200, 200);
		assert.isObject(wall1);
		var wall2 = new Wall(2,2);
		assert.isObject(wall2);
	});

	it("wall build test", function() {
		var wall1 = new Wall(2, 2, 1);
		wall1.getWall();
		//expect(wall1.build().length).to.equal(1);
		wall1.destroy();
	});

});
