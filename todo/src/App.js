import React, { Component } from 'react';
import {connect} from "react-redux"
import './App.css';
import {addinput} from "./actions/action"
class App extends Component {
  state = {
    inputMember :  "",

  }

  
  changeHandler = e =>{
    e.preventDefault();
    this.setState ({
      inputMember: e.target.value
    })
  
    console.log(this.state.inputMember)
  }


  addMember = e=>{
    e.preventDefault()
    this.props.addinput(this.state.inputMember)
    this.setState({
      inputMember : ""
    })
  }



  
 

  render() {
    console.log(this.props.todoList)
    return (
      <div className="App">
        <header className="App-header">
          <h3> A title </h3>
          <input type="text" 
                  value={this.state.inputMember}
                 name="inputMember"
                onChange={this.changeHandler} />
                <button onClick={this.addMember}> Add a value </button>
            {this.props.todoList.map(todo=><p>{todo.task}</p>)}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    todoList : state.todo
  }
}


export default connect(mapStateToProps,{
  addinput 
})(App);
