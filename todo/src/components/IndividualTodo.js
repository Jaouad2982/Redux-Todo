import React from "react"
import {connect} from "react-redux"
import {toggleInput} from "./../actions/action"
const IndividualTodo =(props)=>{


    return (
        <ul>
            <li onClick={()=>props.toggleInput(props.todo.id)}
           style={!props.todo.completed ? null :style} >
            {props.todo.task}</li> 
        </ul>
    )
}

const style = {
    textDecoration : "line-through"
  }

export default connect (null,{toggleInput})(IndividualTodo)