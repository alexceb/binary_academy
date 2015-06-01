//duckType function that recieve object as argument
function duckType(obj) {
	var objType;
	var context = obj || this;

	if (context.name && context.age && context.live) {
		objType = context.study? 'student' : 'man';
	}

	return objType;
}
