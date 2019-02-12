import React from 'react'
import ReactDOM from 'react-dom'

class JoinAdmin extends React.Component {

	constructor() {
		super();
		this.start = this.start.bind(this);
	}

	start() {
		var adminName = ReactDOM.findDOMNode(this.refs.name).value;
		var PollName = ReactDOM.findDOMNode(this.refs.pName).value;
		this.props.emit('start', { title: PollName, name: adminName}); 
		//sending this to the server
	}

	render() {
		return (
				<form action="javascript:void(0)" onSubmit={this.start.bind()}>

					<label>Name </label>
					<input ref="name"
							className="form-control"
							placeholder="enter name..."
							required />

					<label>Poll Name </label>
					<input ref="pName"
							className="form-control"
							placeholder="enter the poll name"
							required />

					<button className="btn btn-primary">Create Poll</button>

				</form>
			);
	}
}

export default JoinAdmin