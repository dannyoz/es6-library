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

	mustard.navigation = function (parent, list) {

		var item,
			ref       = parent.substr(1),
			target    = document.getElementById(ref),
			markup    = "",
			listItems = "";

		for (item in list){
			listItems += '<li><a href="'+list[item]+'">'+item+'</a></li>';
		}

		markup = "<ul>"+listItems+"</ul>";
		target.innerHTML = markup;
	};

})();






