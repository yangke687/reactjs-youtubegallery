var React = require('react');
var Video = require('./Video.js');

var VideoList = React.createClass({
	render: function(){
		return (<div className="row">
			{
				this.props.videos.map(function(video,index){
					return <Video video={video} key={index} />
				})
			}
		</div>);
	}
});

module.exports = VideoList;