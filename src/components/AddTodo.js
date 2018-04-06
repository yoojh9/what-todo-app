import React, { Component } from 'react';
import PropTypes from 'prop-types'
import uuid from 'uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {db} from "../../build/firebase/config";

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
		const localUser = JSON.parse(localStorage.user);
		const uid = uuid.v1();
		console.log(uid)
		console.log(localUser)

		db.ref('todos/'+localUser.uid+'/'+uid).set({
			uuid: uid,
			userid: localUser.uid,
			date: this.props.date,
			todo: this.state.inputValue
		});

	}

	render() {
		return(
				<div>
					<form id="myForm">
						<Paper style={{width: '90%', leftMargin: '15px'}} zDepth={1}>
							<div	style={{marginLeft: '10px'}}>
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
		)
	}
}
