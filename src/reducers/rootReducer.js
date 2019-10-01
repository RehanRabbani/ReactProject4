const initState ={
    posts:[
        {id: '1',name: "Lea Gra",  username: "Bret"},
        {id: '2',name: "Leanne ",  username: "ret"},
        {id: '3',name: " Graham",  username: "Bet"},
            
          
    ]
}

const rootReducer = (state = initState, action)=>{
if(action.type === 'DELETE_POST'){
    let newPost = state.posts.filter((post)=>{
        return action.id !== post.id
    })
    return{
        ...state,
        posts:newPost
    }
}
return state;
}
 export default rootReducer;
 