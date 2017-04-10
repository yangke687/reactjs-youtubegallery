var React = require('react');
var AppActions = require('../actions/AppActions.js');

var Video = React.createClass({
	render: function() {
		var link = 'https://www.youtube.com/embed/' + this.props.video.video_id;
		return (<div className="c4">
			<h5 style={{height:"150px;"}}>
				{this.props.video.title}
				<span className="delete">
					<a href="javascript:void(0);" onClick={this.onDelete.bind(this,this.props.video.id)}>X</a>
				</span>
			</h5>
			<iframe width="360" height="285" src={link} frameborder="0"></iframe>
			<p>{this.props.video.description}</p>
		</div>);
	},
	onDelete: function(id) {
		AppActions.removeVideo(id);
	}
});

module.exports = Video;