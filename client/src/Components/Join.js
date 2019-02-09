import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';

class Join extends React.Component {

	constructor() {
		super();
		this.join = this.join.bind(this);
	} 

	join() {
		var userName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name: userName});
	}

	render() {
		return (
				<form action="javascript:void(0)" onSubmit={this.join.bind()}>

					<label>Name </label>
					<input ref="name"
							className="form-control"
							placeholder="enter  name..."
							required />
					<button className="btn btn-primary">Join</button>
					<Link to='/Admin'>Create Your Poll</Link>
					<Link to='/Results'> Results</Link>
				</form>
			);
	}
}

export default Join
