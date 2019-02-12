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
				<form action="javascript:void(0)" >

					<label>Question </label>
					<input ref="questionName"
							className="form-control"
							placeholder="enter name..."
							required />
					
					<input type="checkbox" name="vehicle1" > I have a bike </input>
                    <input type="checkbox" name="vehicle2" > I have a car  </input>
                    <input type="checkbox" name="vehicle3" > I have a boat</input>
                    <button className="btn btn-primary">Submit</button>
					<Link to='/Results'> Results</Link>
				</form>
		);
	}
}

export default Join
