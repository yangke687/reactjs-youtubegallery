var AppActions = require('../actions/AppActions');
var firebase = require('firebase');

module.exports = {
	saveVideo: function(video){
		this.firebaseRef = new firebase("https://ytgallery-b8e7b.firebaseio.com/");
		this.firebaseRef.push(video);
	},
	getVideos: function(){
		this.firebaseRef = new firebase("https://ytgallery-b8e7b.firebaseio.com/");
		this.firebaseRef.once("value",function(snapshot){
			var videos = [];
			snapshot.forEach(function(childSnapshot){
				var video = {
					id: childSnapshot.key(),
					title: childSnapshot.val().title,
					video_id: childSnapshot.val().video_id,
					description: childSnapshot.val().description
				};
				videos.push(video);
			});
			AppActions.receiveVideos(videos);
		});
	}
}