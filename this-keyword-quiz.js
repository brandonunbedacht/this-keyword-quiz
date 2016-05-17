//1) What is the value of 'this' at Line A? Why?

if (true) {
    // Line A
}

   //Answer: window
   //This is bound to the global object. 

//2) What is the value of this at line B when obj.staticFunction() is executed? Why?

	var obj = {
	    someData: "a string"
	};

	function myFun() {
	    // Line B
	}

	obj.staticFunction = myFun;

	obj.staticFunction();

   //Answer: obj
   //This is bound to the object(obj), because the function was called on the object.

//3) What is the value of this at line C? Why?

	var obj = {
	    myMethod : function () {
	        // Line C
	    }
	};
	var myFun = obj.myMethod;
	myFun();

	//Answer: window
	//The value of this at line C is bound to the global(window) object, because it was not called on an object.

//4) What is the value of this at line D? Why?

	function myFun() {
    // Line D
	}
	var obj = {
	    myMethod : function () {
	        eval("myFun()");
	    }
	};
	obj.myMethod();

	//Answer: window
	//This one was tricky. When evaluating the eval code, this is obj. However, in the eval code, myFun is 
	//not called on an object, so ThisBinding is set to window for the call.

//5) What is the value of this at line E?

	function myFun() {
	    // Line E
	}
	var obj = {
	    someData: "a string"
	};
	myFun.call(obj);

	//Answer: obj
	//The line myFun.call(obj); is invoking the special built-in function Function.prototype.call(), 
	//which accepts thisArg as the first argument.