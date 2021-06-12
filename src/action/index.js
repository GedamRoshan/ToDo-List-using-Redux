export const TodoAdd =(data) =>{
   return{
       type:"TODO_ADD",
       payload:{
           id : new  Date().getTime().toString(),
           data:data
       }
   }
}


export const DeleteTodo =(id)=>{
    return{
        type:"TODO_DELETE",
        id
    }
}


