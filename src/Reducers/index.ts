import { combineReducers } from "redux";
import inc_dec_app from "./Inc_Dec";
import addItemToCart from "./AddItemToCart";


const rootReducer = combineReducers({inc_dec_app,addItemToCart});


export default rootReducer;