
const initialState = {
    todo : [
        {
        task : "walk the dog",
        completed: false
    },
    {
        task : "read your books",
        completed: false
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
        return{
            ...state,
            todo : state.todo.map(todo=>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        todo : !todo.completed
                    }
                }
                return todo
            })
        }
        default :
                return state
       
    }
        
 
}

export default reducer