(()=>{"use strict";function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var n=function(){function n(e,o){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=e,this.age=o}var o,t;return o=n,(t=[{key:"getName",value:function(){return this.name}}])&&e(o.prototype,t),n}();console.log(9);var o=new n("Danny",22);console.log(o.getName()),console.log("Hello World!!!")})();