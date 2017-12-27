var todo = new Vue({
	el: '#app',
	data: {
		text : '',
		todoList : []
	},
	methods : {
		addNewItem : function(){

			if(this.text.length > 0){
				this.todoList.unshift(
					{
						text : this.text,
						creationTime : new Date().getTime(),
						done : false
					}
				);
			}
			
			this.text = '';
		},
		deleteItem : function(index){
			// Delete List item from list
			this.todoList.splice(index, 1);
		}
	}
});