Template.taskPage.helpers({
	currentPost:function(){
		return Tasks.findOne(Session.get('currentPostId'));
	}
});