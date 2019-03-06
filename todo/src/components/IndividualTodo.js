import React from "react"
import {connect} from "react-redux"
import {toggleInput,/*clearTak */} from "./../actions/action"

const IndividualTodo =(props)=>{


    return (
        <div>
        <div>
            <li onClick={()=>props.toggleInput(props.todo.id)}
           style={!props.todo.completed ? null :style} >
            {props.todo.task}</li> 
        </div>
        <div>
       {/*Working on clearing tasks */}

        </div>
        </div>
    )
}

const style = {
    textDecoration : "line-through"
  }

export default connect (null,{toggleInput,/*clearTask */})(IndividualTodo)