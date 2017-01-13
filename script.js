(function() {
	'use strict';
	
	var App = React.createClass({
		getInitialState: function() {
			return {
				text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n[Chuck Reynolds](https://freecodecamp.com/guitarplrc)'
			};
		},
		update: function(newText) {
			this.setState({text: newText})
		},
		convert: function(text) {
			var converted = marked(text, {sanitize: true});
			return {
				__html: converted
			}
		},
		render() {
			return (
				<div>
					<h1>Markdown Preview</h1>
					<Markdown text={this.state.text} update={this.update} convert={this.convert} />
				</div>
			);
		}
	});
	
	var Markdown = React.createClass({
		update: function() {
			var updated = this.refs.input.value;
			this.props.update(updated);
		},
		render() {
			return (
				<div>
					<textarea rows="30" type="text" value={this.props.text} onChange={this.update} ref="input" />
					<div id='output' dangerouslySetInnerHTML={this.props.convert(this.props.text)}></div>
				</div>
			);
		}
	});
	
	ReactDOM.render(<App />, document.getElementById('app'));
})();