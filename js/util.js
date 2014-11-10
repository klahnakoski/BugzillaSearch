var string2html;

(function(){
	var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		"/": '&#x2F;',
		"\n": "<br>",
		"\t": "&nbsp;&nbsp;&nbsp;&nbsp;"
	};

	function highlight(value, words){
		if (value.trim().length==0) return undefined;

		var newValue=value;
		words.forall(function(w){
			if (newValue.indexOf(w)>=0){
				newValue=newValue.replaceAll(w, "<b>"+w+"</b>");
			}//endif
		});
		if (newValue!=value){
			return newValue;
		}else{
			return undefined;
		}//endif
	}//function


	string2html = function String2HTML(value, searchWords) {
		if (value==null) return "";

		var maxLines=2;
		return value.split("\n").map(function(value){
			if (maxLines==0) return undefined;
			var newLine=highlight(value, searchWords);
			if (newLine){
				maxLines--;
				return newLine;
			} //endif
		}).join("<br>");
	};//method
})();

