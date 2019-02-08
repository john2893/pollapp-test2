import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export class Join extends Component {
  
    join(){
        var userName = ReactDOM.findDOMNode(this.refs.name).value;
        alert ("todo " + userName);
        this.props.emit('join', {name: userName});
    }

    render() {
        return (
            <div>
            <form action="javascript:void(0)" onSubmit={() => this.join()}>
                <label> Full Name </label>
                <input ref="name" 
                className="form-control" 
                placeholder="enter your full name" 
                required />
                
                <button className="btn btn-primary"> Join</button>
            </form>
            </div>
        )
    }
}

export default Join
