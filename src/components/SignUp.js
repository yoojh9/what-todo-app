import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        name: ''
      }
    };
  }

  render() {
    return (
      <Card className="container" style={{margin:'5% 20% 20% 20%', paddingTop:'5px'}} align="center">
      <form action="/" onSubmit={console.log('login')} style={{textAlign:'center'}}>
        <h2 className="card-heading">SignUp</h2>

        {this.state.errors.summary && <p className="error-message">{this.state.errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={this.state.errors.email}
            onChange={console.log('change')}
            value={this.state.user.email}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Name"
            type="name"
            name="name"
            onChange={console.log('change')}
            errorText={this.state.errors.name}
            value={this.state.user.name}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={console.log('change')}
            errorText={this.state.errors.password}
            value={this.state.user.password}
          />
        </div>
        <br/>
        <div className="button-line">
          <RaisedButton type="submit" label="Create New Accout" primary />
        </div>
        <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
      </form>
    </Card>
    );
  }
}

export default SignUp;
