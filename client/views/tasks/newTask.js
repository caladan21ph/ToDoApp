Template.newTask.events={
	'click #save-task':function(){
		
		var tempTitle=$("#title").val();
		var tempDesc=$("#description").val();
		var tempPriority=$("#priority").val();
		var tempAuthor=Meteor.userId();
		
		Tasks.insert({
			title:tempTitle,description:tempDesc,priority:tempPriority,author:tempAuthor
		})
		
		alert(tempDesc);
	}
};