(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var mustard = {};

(function () {
	"use strict";

	mustard.element = function (ele, content) {
		var type = ele.charAt(0),
		    target;

		switch (type) {
			case '.':
				target = document.querySelectorAll(ele);
				break;
			case '#':
				var ref = ele.substr(1);
				target = document.getElementById(ref);
				break;
		}

		target.innerHTML = content;
	};

	mustard.navigation = function (parent, list) {

		var item,
		    ref = parent.substr(1),
		    target = document.getElementById(ref),
		    markup = "",
		    listItems = "";

		for (item in list) {
			listItems += '<li><a href="' + list[item] + '">' + item + '</a></li>';
		}

		markup = "<ul>" + listItems + "</ul>";
		target.innerHTML = markup;
	};
})();

},{}]},{},[1])