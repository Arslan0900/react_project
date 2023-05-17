import { ProductItems } from "../Components/Data"
export const increment = (num:number)=>{
    return{type: 'INCREMENT',payload:num}
}
export const decrement = (num:number)=>{
    return{type: 'DECREMENT',payload:num}
}
export const addToCart = (item:ProductItems)=>{
    return{type: 'ADDTOCART',payload:item}
}
export const clearCart = ()=>{
    return{type: 'CLEARCART'}
}