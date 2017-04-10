var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	saveVideo: function(video) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_VIDEO,
			video: video
		});
	},
	receiveVideos: function(videos) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECV_VIDEOS,
			videos: videos
		});
	},
	removeVideo: function(id) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_VIDEO,
			id: id
		});
	}
}

module.exports = AppActions;