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


========================

NodeJS
 ==> platform with v8 engine and libuv c++ libraries to execute JavaScript code

* can be used to build APIs [ RESTful / GraphQL]
* Realtime application [ update dashboard ]
* Streaming platform for [ OTT => Netflix, Amazon] 
* platform for developing client side web application

Why Node for developing client side web application?
1)  Code is written in TypeScript / LiveScript / DART / JSX, ES 6, ...
None of this is understood by JS engine, we need to transcompile, preprocessor

==> TSC ==> TypeScript Compiler

a.ts ==> tsc a.ts ==> a.js

==> Babel
 a.js [ ES 6] ==> babel ==> a.js [ ES 5] ==> Compatable

2) TESTING
	Unit testing / E2E 

3) Static Code analysis ==> Linting

4) Minify and Uglify your code and bundle your code
	Minify ==> remove white spaces from code
	Uglify => big names to small names

	a.js, b.js , c.js ==> bundle.js

	<script src="bundle.js"></script>


===========

Build tools for NodeJS
1) Grunt
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.
2) Gulp
3) Webpack

==================

NPM ==> Node Package Manager
* manage dependencies
* run scripts
* publish to repository

npm init -y

initialize a node project


package.json

// libraries required in production mode
dependencies : {
	react
},

// libraries required for development mode [ tsc, babel, testing librarires]
devDependencies : {

}

"scripts": {
    "test": "mocha --reporter spec",
    "start" : "node a.js"
    "dev": "webpack --mode production" 
  },


  npm start
  npm test
  npm run dev

  ===

  webpackexample> npm i webpack webpack-cli webpack-dev-server -D

  "webpack-dev-server": "^4.6.0"

  ^4.6.0 any latest version greater than or equal tp 4.6.0

  ~4.6.0 any version which is "4", minor version and patch can be latest
  	4.7.0 is valid
  	4.7.7 is valid
  	5.0.0 is invalid

  4.6.0 exact version
  
  ===

  Other team members:

  webpackexample> npm install


  SourceMap is avaialble in development mode and not in production


==
npm run dev
check code

npm run prod
check code
  npm i html-webpack-plugin -D

HTML Webpack Plugin:
This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.

index.html
<script src="dist/main.js"></script>
<style> .. </style>


==

Babel

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ /ES6 code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

webpack> npm i @babel/core babel-loader @babel/preset-env -D