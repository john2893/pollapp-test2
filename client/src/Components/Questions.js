
import React from 'react'

class Questions extends React.Component {

	constructor() {
		super();
		this.ask = this.ask.bind(this);
		this.questionLoop = this.questionLoop.bind(this);
	}

	ask(question) {
		this.props.emit('ask', question);
	}

	questionLoop(question, i) {
		return (
				<div key={i} className="col-xs-12 col-sm-6 col-md-3">
					<span onClick={this.ask.bind(null, question)}>{question.q}</span>
				</div>
			);
	}

	render() {
		return (
				<div id="questions" className="row">
					<h2>Questions</h2>
					{this.props.questions.map(this.questionLoop)}
				</div>
			);
	}
}

export default Questions
