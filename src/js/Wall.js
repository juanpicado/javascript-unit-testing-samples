var Wall = function(x, y, b) {
	this.width = x;
	this.height = y;
	this.brick =  b || 400;
	this.wall = [];
};

Wall.prototype = {
	build : function() {
		//for (i=0;this.brick;i++) {
			//this.wall.push(1);
		//}
	},
	getWall : function() {
		return this.wall;
	},
	destroy : function(){
		this.wall = [];
	}
};