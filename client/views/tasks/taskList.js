Template.taskList.helpers({
	tasks:function(){
		return Tasks.find();
	},
	
	
});


/*Template.taskList.events={
	'click #new-task':function(){
		alert('added new task');
	}
	
}*/