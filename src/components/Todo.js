import React, { Component, PropTypes } from 'react';
import {
	blueGrey800,
 	red600,
} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

class Todo extends Component {

  render() {
    return(
  		<ListItem style={{width: '90%'}} rightIconButton={<div style={{display: 'flex'}}>
				<IconButton tooltip='remove' tooltipPosition='bottom-right' onClick={this.onClick} iconStyle={{color: red600}}>
					<DeleteIcon/>
				</IconButton><Checkbox onCheck={this.onCheck}style={{marginTop:12}}/>
			</div>}>
  		<div style={{display: 'flex'}}>
  			<li>
  				{this.props.todo}
  			</li>
  		</div>
  		<Divider />
  	</ListItem>
  		)
  }
}

export default Todo;
