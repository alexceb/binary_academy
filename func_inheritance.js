function FuncMan(name, age) {

	//protected properties for Man and Student's use
	this._name = name || 'noname';
	this._age = age || 0;

	var self = this;

	//public method for read-only 'age' field
	this.getAge = function() {
		return self._age;
	};

	//public method to get/set 'name' field
	this.name = function(nme) {
		if (!arguments.length) return self._name;
		self._name = nme;
	};


	this.live = function() {
		console.log(self._name + ' is living!');
	};
}

function FuncStudent (name, age) {
	FuncMan.apply(this, arguments);

	this.study = function() {
		console.log(this._name + ' is styding!');
	};

	//override the .live method to adjust new behavior for student instance (Student is also studying while living =))
	var parentLive = this.live;
	this.live = function() {
		parentLive();
		this.study();
	};
}	
