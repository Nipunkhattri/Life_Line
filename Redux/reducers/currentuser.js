const currentUserreducer = (state=null,actions)=>{
    switch (actions.type) {
        case "FETCH_USER_DATA":
            return actions.payload;
        default:
            return state;
    }
}
export default currentUserreducer;