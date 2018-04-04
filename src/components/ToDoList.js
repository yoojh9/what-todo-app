import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import ListIcon from 'material-ui/svg-icons/action/list';
import Paper from 'material-ui/Paper';
import { grey700 } from 'material-ui/styles/colors';
import List from 'material-ui/List';

import AddTodo from './AddTodo';
import Todo from './Todo';

class ToDoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      todos:[{
        id:'1',
        task:'퇴근'
      }, {
        id:'2',
        task:'출근'
      }]
    }
  };

  render() {
    let todoNode = this.state.todos.map((todo, i) => {
      return (
          <Todo todo={todo.task} key={i}/>
      )
    })
    return(
      <Paper style={{paddingBottom: '20px', marginTop: 100, marginBottom: 100, marginRight: 20, marginLeft: 40}}>
         <div
         style={{
           display: 'flex',
         }}
         >
         <div style={{marginLeft: '44%'}}>
           <h1 style={{ textAlign: 'center', color: grey700}}>
             Todo List
           </h1>
         </div>

         </div>

         <List style={{marginLeft: '5%'}}>
           <ul>{ todoNode }</ul>
         </List>

         <br />
         <div style={{marginLeft: '5%'}}>
          <AddTodo/>
         </div>
       </Paper>

    )
  }
}

export default ToDoList;
