 var mustard = {};

(function(){
	"use strict";

	mustard.element = function(ele,content){
		var type = ele.charAt(0),
			target;
		
		switch (type) {
			case '.' : 
				target = document.querySelectorAll(ele);
			break;
			case '#' :
				var ref = ele.substr(1);
				target = document.getElementById(ref);
			break;
		}

		target.innerHTML = content;
	};

	mustard.route = function(){
		
	};

})();






