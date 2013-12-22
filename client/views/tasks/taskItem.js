Template.taskItem.helpers({
	color:function(){
		
		var color="Red";
		var priority=this.priority;
		
		
		switch(this.priority){
		case 'low':
			color="Yellow";
			break;
		
		case 'normal':
			color="White";
			break;
			
		case 'high':
			color="Blue";
			break;
			
		case 'urgent':
			color="Red";
			break;
			
		default:
			color="White";
			break;
		}
		
		
		return color;
	}
});