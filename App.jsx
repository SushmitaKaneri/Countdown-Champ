import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button } from 'react-bootstrap';
class App extends Component {

    //local state to class
  constructor(props) {
    super(props);
    this.state = {
      deadline1: 'December 20, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline1: this.state.newDeadline});
  }
  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline1}</div>
        <Clock
          deadline1={this.state.deadline1}
        />
        <Form inline>
          <FormControl className="Deadline-input" onChange={event => this.setState({newDeadline: event.target.value})} placeholder='New Date'/>
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
