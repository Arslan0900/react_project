import { ProductItems } from "../Components/Data";
export interface cartItems extends ProductItems{
quantity: number;
}
const initialState:cartItems[] = [];
interface Action {
    type: "ADDTOCART",
    payload: cartItems
  };
const addItemToCart = (state:cartItems[]=initialState,action:Action)=>{
    if (action.type === "ADDTOCART") {
        const productExit = state.find((item) => item.id === action.payload.id);
        if (productExit) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
      }
      if(action.type==="CLEARCART"){
        return state=[]
      }
      return state;
}
export default addItemToCart;