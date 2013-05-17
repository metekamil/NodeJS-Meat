
//Process bones and fat
exports.process = function(bones, food){
    

    function out(html, data){
         

		for(var attributename in data){
		     
		    html = html.replace("{" + attributename + "}",data[attributename]);
		}

        return html;
    

    }
    return out(bones,food);
};