export const initialState={
    taskArray:[]
}
export const stateReducer = (state,action) =>{
  switch(action.type){
    case "FORM" :
      return {
        ...state,
        taskArray:action.payload,
      };
      default:
        return state;
  }
}