var Window = function(x,y) {
	this.width = x;
	this.height = y;
	this._build();
};

Window.prototype = {
	open : function() {
		this._status = true;
	},
	close : function() {
		this._status = false;
	},
	_build : function () {
		this._glasses = 4;
		this._status = false;
	}
};