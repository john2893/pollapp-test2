import React, { Component } from 'react'

export class Ask extends Component {
    constructor() {
		super();
		this.state  = {
			choices: [],
			
		}
		this.setUpChoices = this.setUpChoices.bind(this);
		
		this.addChoiceButton = this.addChoiceButton.bind(this);
	}
    // getInitialState(){
    //     return {
    //         choices: []
    //     }
    // }
    setUpChoices(){
        var choices = Object.keys(this.props.question);
        choices.shift();
        this.setState({choices:choices});
    }
    componentWillMount(){
        this.setUpChoices();

    }
    componentWillReceiveProps(){
        this.setUpChoices();
    }

    addChoiceButton(choice, i){
        return (
            <button key={i} className="col-xs-12 col-sm-6 btn btn-primary">
                {choice}: {this.props.question[choice]};

            </button>
        )

    }
  render() {
    return (
      <div id="curQues">
        <h2>{this.props.question.q}</h2>
        <div className="row">
            {this.state.choices.map(this.addChoiceButton)}
        </div>
      </div>
    )
  }
}

export default Ask
