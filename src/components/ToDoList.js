import React, { Component } from 'react';
import FastRewind from 'material-ui/svg-icons/av/fast-rewind';
import FastForward from 'material-ui/svg-icons/av/fast-forward';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { grey700 } from 'material-ui/styles/colors';
import List from 'material-ui/List';
import AddTodo from './AddTodo';
import Todo from './Todo';

class ToDoList extends Component {

  constructor(props) {
    super(props);

    const date = new Date();
    date.setHours(0,0,0,0);

    this.state = {
      slideIndex: 0,
      date : this.formatDate(date),
      todos:[{
        id:'1',
        task:'퇴근'
      }, {
        id:'2',
        task:'출근'
      }]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  };

  formatDate(date){
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange(){
    console.log('change')
  }


  handleClickPrev(e){
    e.stopPropagation();

    let date = new Date(this.state.date);
    date.setDate(date.getDate()-1);
    this.setState({
      date: this.formatDate(date)
    })
  }


  handleClickNext(e){
    e.stopPropagation();

    let date = new Date(this.state.date);
    date.setDate(date.getDate()+1);
    this.setState({
      date: this.formatDate(date)
    })
  }

  render() {
    const styles = {
      mediumIcon: {
        width: 36,
        height: 36,
      },
      medium: {
        width: 72,
        height: 72,
        padding: 16,
      }
    }

    let todoNode = this.state.todos.map((todo, i) => {
      return (
          <Todo todo={todo.task} key={i}/>
      )
    })
    return(
      <Paper style={{paddingBottom: '20px', marginTop: 100, marginBottom: 100, marginRight: 20, marginLeft: 40}}>
         <div>
         <div style={{marginLeft: '40%', display:'flex'}} >
           <IconButton
             tooltip='prev' tooltipPosition='bottom-right'
             onClick={this.handleClickPrev} style={styles.medium} iconStyle={styles.mediumIcon}
           >
            <FastRewind/>
           </IconButton>
           <h1 style={{ textAlign: 'center', color: grey700}}>
             {this.state.date}
           </h1>
           <IconButton
             tooltip='next' tooltipPosition='bottom-right'
             onClick={this.handleClickNext} style={styles.medium} iconStyle={styles.mediumIcon}
           >
           <FastForward/>
          </IconButton>
         </div>

         </div>

         <List style={{marginLeft: '5%'}}>
           <ul>{ todoNode }</ul>
         </List>

         <br />
         <div style={{marginLeft: '5%'}}>
          <AddTodo date={this.state.date} />
         </div>
       </Paper>

    )
  }
}

export default ToDoList;
