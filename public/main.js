/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var miel = __webpack_require__(2)

	document.querySelector('textarea').value = "var add2 = (num) => {-}\n\treturn num + 2;\n\naddSum(2,2);";
	var button = document.querySelector('button');

	button.onclick = function(e) {
	  var input = document.querySelector('textarea').value
	  var output = miel(input);
	  document.querySelector('pre').innerText = output 
	  e.preventDefault()
	}

	document.querySelector("textarea").addEventListener('keydown',function(e) {
	    if(e.keyCode === 9) { // tab was pressed
	        // get caret position/selection
	        var start = this.selectionStart;
	        var end = this.selectionEnd;

	        var target = e.target;
	        var value = target.value;

	        // set textarea value to: text before caret + tab + text after caret
	        target.value = value.substring(0, start)
	                    + "\t"
	                    + value.substring(end);

	        // put caret at right position again (add one for the tab)
	        this.selectionStart = this.selectionEnd = start + 1;

	        // prevent the focus lose
	        e.preventDefault();
	    }
	},false);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var miel = __webpack_require__(3);

	module.exports = function(source){
	  return miel(source) 
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var wrap = __webpack_require__(4);
	var declare = __webpack_require__(5);

	module.exports = function(input){
	  return declare(wrap(input));
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	var indent = '(^[ \\t]*)';
	var SYMBOL = '{-}';
	var REGEX = new RegExp('^' + indent + 
	                       '(.*){ *- *}(?!["\\\']| *\\w)' + 
	                       '(.*)' + 
	                       '((\\s+\\1(?!\\n)\\s+\\S.*)*)', 'm');

	module.exports = function wrap(input) {
	  var output = input.replace(REGEX, '$1$2{$4\n$1}$3')
	  if(input === output) return input
	  return wrap(output);
	}



/***/ },
/* 5 */
/***/ function(module, exports) {

	var REGEX = new RegExp('^([ \\t]*)([_$a-zA-Z\xA0-\uFFFF]+ *):=', 'gm');

	module.exports = function(input){
	  return input.replace(REGEX, '$1var $2=');
	};


/***/ }
/******/ ]);