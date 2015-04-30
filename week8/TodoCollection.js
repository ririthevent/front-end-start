var todos = [];

var collection = {

	add: function(){
		todos.push(todo);

		$(document.body).trigger( "addCollection");
	},

	remove : function(id){
		for(var i = 0; todos.length; i++){
			if(id===todos[i].id){
				todos.splice(i, 1);
				break;
			}
		}
	}
};