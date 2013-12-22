Meteor.Router.add({
	'/':'taskList',
	'/tasks/:_id':{
		to:'taskPage',
		and:function(id){Session.set('currentPostId',id);}
	},
	'/new':'newTask'
	
});