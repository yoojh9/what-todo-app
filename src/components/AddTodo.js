import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddTodo extends Component {

	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.state = {
			inputValue: '',
		}
	}

	onClick(event) {
		event.preventDefault();
		// var todo = this.state.inputValue;
		// if(todo=='') return
		// else {
		// 	var form = document.getElementById("myForm");
		// 	form.reset()
		// 	this.props.handleClick(todo);
		// 	this.state.inputValue = ''
		// }
		console.log('click')
	}

	render() {
		return(
			<MuiThemeProvider>
				<div>
					<form id="myForm">
					<Paper style={{width: '90%', leftMargin: '15px'}} zDepth={1}>
					<div
						style={{marginLeft: '10px'}}
					>
						<TextField
							hintText="What needs to be done?"
							className="AddText"
							fullWidth={true}
							onChange={(e) => this.setState({ inputValue: e.target.value })}
						>
						</TextField>
					</div>
					</Paper>
						<br/>
						<RaisedButton
							type="submit"
							label='Add todo'
							primary={true}
							onClick={this.onClick}
						/>
					</form>

				</div>
			</MuiThemeProvider>
		)
	}
}
