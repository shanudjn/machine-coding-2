export const initialState = {
    products: [],
    cart: [],
    saveForLater: []
}

export function reducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            // let products = ...action.data.products
            console.log("Setting Products", action.payload)

            return { ...state, products: action.payload }
        case "ADD_TO_CART":
            console.log("adding to cart", action.payload)
            const updateCart = state.cart.concat(action.payload)
            return { ...state, cart: updateCart }
        case "SAVE_FOR_LATER":
            console.log("adding to saveForLater", action.payload)
            const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id)
            const updateSaveForLater = state.saveForLater.concat(action.payload)
            return { ...state, cart: removeFromCart, saveForLater: updateSaveForLater }

        case "MOVE_TO_CART":
            console.log("moving to cart");
            const removeFromSaved = state.saveForLater.filter((item) => item.id !== action.payload.id);
            const updateTheCart = state.cart.concat(action.payload)
            return { ...state, cart: updateTheCart, saveForLater: removeFromSaved }


        case "DECREASE_QUANTITY":
            console.log("decreasing", action.payload)

            return {
                ...state, cart: state.cart.map((cartItem) =>
                    cartItem.id === action.payload
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : { ...cartItem }
                )
            }
        case "INCREASE_QUANTITY":
            console.log("increasing", action.payload)

            return {
                ...state, cart: state.cart.map((cartItem) =>
                    cartItem.id === action.payload
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : { ...cartItem }
                )
            }
        default:
            return state
    }
}