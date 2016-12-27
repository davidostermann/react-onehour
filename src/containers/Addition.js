import React, {Component} from 'react';
import Input from './Input';
import Button from './Button';

export default class Addition extends Component {
	constructor(){
		super();
		this.state = {
			addition : {left_number : 0,right_number : 0},
			result: 0
		}
		this._addition = this._addition.bind(this);
		this._getInputValue = this._getInputValue.bind(this);
	}

	_addition(){
        let value = Object.keys(this.state.addition).map((key) => parseFloat(this.state.addition[key]));
        console.log(value)
		this.setState({
			result: value.reduce((a, b) => a+b)
		})
	}

	_getInputValue(e){
		let state = this.state.addition;
		state[e.target.name] = e.target.value;
		this.setState({
			addition: state
		})
	}
	render(){
		return(
			<div>
				<div className="ui four column centered grid">
  					<div className="column">
  						<h2 className="centered-text">Calculatrice</h2>
  						<span className="content-result centered-text">Resultat : 
  						<span className="result">{this.state.result}</span></span>
						<Input 
							name="left_number"
							type='number'
							action={this._getInputValue}
						/>
						<span className="addition centered-text">+</span>
						<Input 
							name="right_number"
							type='number'
							action={this._getInputValue}
						/>
						<Button action={this._addition}/>
					</div>
				</div>
			</div>
		)
	}
}