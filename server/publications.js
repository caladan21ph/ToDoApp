Meteor.publish('alltasks',function(){
	return Tasks.find({'author':this.userId});
});

/*Meteor.publish('usertasks',function(){
	return Tasks.find({'author':this.userId})
});*/