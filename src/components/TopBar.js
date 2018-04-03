import React from 'react';
import AppBar from 'material-ui/AppBar';
import Login from './Login';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

export default class TopBar extends React.Component {
  render() {

    return (
        <AppBar
          title={<span style={{cursor: 'pointer'}}>What To Do</span>}
          onTitleClick={this.handleClick}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<Login/>}
        />
    )
  }
}
