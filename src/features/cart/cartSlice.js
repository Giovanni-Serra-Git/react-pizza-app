import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state,action) {
            state.cart.push(action.payload)
        },
        deleteItem(state,action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
            console.log(state.cart)
        },
        increaseItemQuantity(state,action) {
            const item = state.cart.find(item => item.pizzaId == action.payload)
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state,action) {
            const item = state.cart.find(item => item.pizzaId == action.payload)
            item.quantity--

            if (item.quantity < 1 ) cartSlice.caseReducers.deleteItem(state, action)

            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state) {
            state.cart = []
        }
    }
})


export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer

export const getTotalPizzasQuantity = state => state.cart.cart.reduce((sum, pizza) => sum + pizza.quantity, 0)
export const getTotalPizzasPrice = state => state.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0)
export const getPizzasFromCart = state => state.cart.cart;
export const getCurrentItemQuantity = id => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? "0"