import React, { Component } from 'react';
import {connect} from "react-redux"
import './App.css';
import IndividualTodo from "./components/IndividualTodo"
import {addinput} from "./actions/action"


class App extends Component {
  state = {
    inputMember :  "",
    error: ""
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
    if(this.state.inputMember !== ""){
    this.props.addinput(this.state.inputMember.trim())
    }
    this.setState({
      inputMember : ""
    })
  }


  render() {
    console.log(this.props.todoList)
    console.log(this.state.error)
 
    return (
      <div className="App">
        
          <h3> A title </h3>
          <input type="text" 
                  value={this.state.inputMember}
                 name="inputMember"
                onChange={this.changeHandler} />
                <button onClick={this.addMember}> Add a value </button>
  
            <div>
                      {this.props.todoList.map((todo)=>
                        <IndividualTodo 
                        key={todo.id} todo={todo}
                        />)}
              </div>
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


