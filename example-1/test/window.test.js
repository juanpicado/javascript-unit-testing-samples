/*global Window */
/*global chai */

'use strict';

var expect = chai.expect;
var assert = chai.assert;

describe("Window", function() {

	it("Window constructor test", function() {
		var w1 = new Window(200, 200, 200);
		assert.isObject(w1);
		var w2 = new Window(2,2);
		assert.isObject(w2);
	});

	it("wall build test", function() {
		var w1 = new Window(2, 2, 1);
		w1.open();
		w1.close();
		//expect(wall1.build().length).to.equal(1);
		//wall1.destroy();
	});

});
