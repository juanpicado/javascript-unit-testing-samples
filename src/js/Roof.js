var Roof = function(w) {
	this._panels = w || 300;
	if (w.lenght < 4) {
		throw new Error("roof need 4 wall at least");
	}
	this.roof = [];
};

Roof.prototype = {
	build : function() {
		if (w.lenght > 4) {

		}
	},
	getWall : function() {
		return this.wall;
	},
	destroy : function(){
		this.wall = [];
	}
};