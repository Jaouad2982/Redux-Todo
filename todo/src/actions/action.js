export const addinput = (input)=>{
    return {
        type : "ADD_INPUT",
        payload : input
    }
}


export const toggleInput = id =>{
    return {
        type : "TOGGLE_INPUT",
        payload : id

    }
}


export const clearAllTasks = ()=>{
    return {
        type : "CLEAR_TASKS"
    }
}