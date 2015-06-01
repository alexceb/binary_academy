function ProtoMan(name, age) {
	this._name = name || 'noname';
	this._age = age || 0;

	Object.defineProperties(this, {
		name: {
			get: function() {
				return this._name;
			},

			set: function(nme) {
				this._name = nme;
			}
		},
		age: {
			get: function() {
				return this._age;
			}
		}
	});
}

ProtoMan.prototype.live = function() {
	console.log(this.name + ' is living!');
};

function ProtoStudent(name, age) {
	ProtoMan.apply(this, arguments);
}

ProtoStudent.prototype = Object.create(ProtoMan.prototype);
ProtoStudent.prototype.constructor = ProtoStudent;

ProtoStudent.prototype.study = function() {
	ProtoMan.prototype.live.apply(this);
	console.log(this._name + ' is studying!');
};


