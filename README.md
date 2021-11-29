# React 

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub: https://github.com/BanuPrakash/aajtak

-------------------------------------------------------------
Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ]

=================================================================


JavaScript ==> Scripting language, loosely typed language

var name = "Tim";

name.toUpperCase();

var age = 22;

age++;

String, number, boolean, undefined, array, object, null

===============

JS ==> JS engine [ V8 [ chrome / Nodejs ], JavaScriptCore [ Safari], SpiderMonkey [ Firefox, Acrobat], Chakra[IE], NashHorn [ Java ] ]

Execution Context:

var g = 100;

function doTask() {
	var a = 10;
	if( g > a ) {
		var b = 20;
		c= 50;
	} 

	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);

Global Creation Context, execution Context, Function Creation Context, function execution Context


====

Event loop of JS

console.log("Hi");

function doTask() {
	setInterval( function timed() {
		console.log("timed!!!")
	}, 100);
}

doTask();

$("#btn").click(function clicked() {
	console.log("Click!!!");
})

console.log("Bye!!");



Psuedocode of Eventloop

pendingTimers = []
pendingOsTasks = []
pendingCallbacks = [];

function shouldContinue() {
	return pendingTimers.length >=0 || pendingOsTasks.length >=0 ..
}

while(shouldContinue()) {
	// execute pendingTimers
	// execute pendingCallbacks
	// excute PendingOsTasks
	// pause
}

=====

function add(x, y) {
	return 
		x + y;
} 

console.log(add(4,5)); // undefined

Abstract Syntax Trees


=====

var obj = {
	"name" : "iPhone",
	"getName" : function() {
		return this.name;
	}
}


obj.getName(); // iPhone

var ref = obj.getName; // context is lost

ref(); // '' name of window

var ref = obj.getName.bind(obj); // ref function should have "obj" context

ref(); // iPhone

==================================

High Order Functions

---------------------
	1) function accepting function as argument
	2) function returning a function

	Commonly used HOF: map, filter, reduce, forEach

	map ==> transform data

	https://rxmarbles.com/

	====================


function returning a function ==> Closure

whenever a function returns a function; the retured function has an access to all the members of outer function refered as Closure

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var mg = greeting("Good morning");

mg("Raj");

mg("Ram");

==============

getEmployee(2); ==> REACt ==> REST API call ==> DB // cache

getEmployee(3); ==> REACt ==> REST API call ==> DB // cache

getEmployee(2); // get from cache

====
memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.


