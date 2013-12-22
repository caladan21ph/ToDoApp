Template.taskList.helpers({
	tasks:function(){
		return Tasks.find().fetch();
	},
	
	
});


/*Template.taskList.events={
	'click #new-task':function(){
		alert('added new task');
	}
	
}*/