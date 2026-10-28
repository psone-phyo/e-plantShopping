export const initialState={items:[]}
export function addItem(state,product){const existing=state.items.find(i=>i.id===product.id);return {...state,items:existing?state.items.map(i=>i.id===product.id?{...i,quantity:i.quantity+1}:i):[...state.items,{...product,quantity:1}]}}
export function removeItem(state,id){return {...state,items:state.items.filter(i=>i.id!==id)}}
export function updateQuantity(state,{id,quantity}){return {...state,items:state.items.map(i=>i.id===id?{...i,quantity:Math.max(1,quantity)}:i)}}
export default function cartReducer(state=initialState,action){switch(action.type){case'cart/addItem':return addItem(state,action.payload);case'cart/removeItem':return removeItem(state,action.payload);case'cart/updateQuantity':return updateQuantity(state,action.payload);default:return state}}
