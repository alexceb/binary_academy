//duckType function that recieve object as argument
function duckType(obj) {
	var objType;
	var context = obj || this;

	if (context.name && context.age && context.live) {
		objType = context.study? 'student' : 'man';
	}

	return objType;
}

//Just my own idea how to improve and make this function scalable
//obj - this is object to check its type
//cons - this is template-object, we check the appereance of its props/methods in "obj" by looping
function duck_Type(obj, cons) {
        //If we passed constructor instead of object
        if (typeof obj == "function") obj = obj.prototype;
        
        //The methods of built-in classes aren't enumerable, that's why we return "undefined". 
        //Otherwise any object will be equivalent of any built-in class.
        if (cons == Array || cons == Boolean || cons == Date || cons == Error ||
            cons == Function || cons == Number || cons == RegExp || cons == String)
            return undefined;

        var proto = cons.prototype;
        for (var p in proto) {
            if (!(p in obj)) return false;
        }

        return true;
}
