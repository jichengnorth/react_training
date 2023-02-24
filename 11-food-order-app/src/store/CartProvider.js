import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState ={
    items:[],
    totalAmount:0
}

const cartReducer =(state, action) =>{
    if (action.type==='ADD'){
        const updatedTotalAmount = state.totalAmount +action.item.price*action.item.amount;

        const exsitingCartItemIndex = state.items.findIndex(item => item.id === action.item.id );
        const exsitingCartItem = state.items[exsitingCartItemIndex];

        let updatedItems;
        if (exsitingCartItem){
            let updatedItem = {
                ...exsitingCartItem, 
                amount: exsitingCartItem.amount+action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[exsitingCartItemIndex] = updatedItem;
            
        }else{
            updatedItems = state.items.concat(action.item);
        }

        
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount,
        };

    }

    if(action.type ==='REMOVE'){
        const exsitingCartItemIndex = state.items.findIndex(item => item.id === action.id );
        const exsitingCartItem = state.items[exsitingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exsitingCartItem.price;

        let updateItems;
        if(exsitingCartItem.amount ===1 ){
            updateItems =state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem ={
                ...exsitingCartItem,
                amount: exsitingCartItem.amount-1,
            }
            updateItems =[...state.items];
            updateItems[exsitingCartItemIndex] =updatedItem;
        }

        return {
            items:updateItems,
            totalAmount:updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider =props =>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState );


    const addItemToCartHandler =(item)=>{
        dispatchCartAction({
            type:'ADD',
            item: item,
        })

    };

    const removeEventListener =(id)=>{
        dispatchCartAction({
            type:'REMOVE',
            id: id,
        })

    };

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeEventListener,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;