
const initialState = {
    todo : [
        {
        task : "walk the dog",
        completed: false,
        id : Date.now()
    },
    {
        task : "read your books",
        completed: false,
        id: Date.now()+1
    }
]
}




const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_INPUT":
        const newTodo = {
            task : action.payload,
            completed : false,
            id : Date.now()
        }
                return {
                    ...state,
                todo : [...state.todo,newTodo]
                }
        case "TOGGLE_INPUT":
                    const myTodo = state.todo.map(todo=>{
                        if(todo.id === action.payload){
                            return { ...todo,completed : !todo.completed}
                        }
                        return todo;
                    })
                    return {...state,todo : myTodo}
        case "CLEAR_TASK" :
                    return {
                        
                    }
        default :  return state
                  
       
    }
        
 
}

export default reducer