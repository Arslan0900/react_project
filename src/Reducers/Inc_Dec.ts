export type Action = {
    type: "INCREMENT" | "DECREMENT",
    payload: number
  };
  
  const initialState:number = 0;
  
  const inc_dec_app = (state:number = initialState, action:Action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    }
    if (action.type === "DECREMENT") {
      return state - action.payload;
    }
    return state;
  };
  
  export default inc_dec_app;
  