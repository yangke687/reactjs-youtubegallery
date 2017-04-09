var AppActions = require('../actions/AppActions');
var firebase = require('firebase');

module.exports = {
	saveVideo: function(video){
		this.firebaseRef = new firebase("https://ytgallery-b8e7b.firebaseio.com/");
		this.firebaseRef.push(video);
	}
}