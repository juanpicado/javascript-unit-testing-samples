var House = function(w, _w, d) {
	this.wall = w;
	this._window = _w;
	this.door = d;
	this.roof = new Roof(w);
};

House.prototype = {
	paint : function() {

	},
	build : function() {
		for (i=0;this.wall;i++) {
			for (i=0;this._window.length;i++) {

			}
			for (i=0;this.door.length;i++) {

			}
		}
		this.roof.build();
		this.attach(this.roof);

	},
	destroy : function(destroyer) {

	}
}