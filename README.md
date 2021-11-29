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

Client  ===> Redis Cache Middle Tier ==> PHP
									 ==> Java

================

ES 6 features:

1) arrow function

	function add(x,y) {

	}

	--

	var add = (x,y) => {
		return x + y
	}

2) let and const to declare block scope variables and constants


var g = 100;
const PI = 3.14159; // constant

function doTask() {
	var a = 10;
	if( g > a ) {
		let b = 20; // visible only within if block
		c= 50;
	} 

	console.log(g, a, b, c); // b is not accessble here
}

doTask();
console.log(g, a, b, c);

3) Destructuring and spread operators

3.1 array

var data = [6,2,6,11,44];
// old way ==> var a = data[0]; var b  = data[1];

var [a,b, ...others] = data

console.log(a); // 6
console.log(b); // 2

console.log(others); // 6, 11, 44


3.2) 

var product = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile" };

var {name, price} = product;

var {name: n, price: p} = product;

 

Clone:
var product = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile" };

var clone = {...product}; // different memory location

var ref = product; // reference

var data = [5,2];

var clone = [...data]; 

==

4) Promise API
	Asynchronous calls returns a Future result

	Synchronous call:

	var result = doTask();
	console.log("called only after doTask() is completed");

	---
	Asynchronous calls

	doTask().then(
		ret => console.log(ret), /* resolved */
		rej => console.log(rej) /* rejected */
	);
	console.log("called before doTask() is completed");


5) async await
6) ES 6 module system
7) generator
8) new String template literal

var name = "Raja";

	var msg =  `
		Hello ${name}
		Good day!!

`;


old:

msg = "Hello" + name + " Good Day!"


=====================





