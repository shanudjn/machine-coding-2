import React from 'react'
import { useProduct } from '../context/ProductContext'

function Cart() {

    const { state: { cart, saveForLater }, dispatch } = useProduct()

    function handleDecreaseQuantity(cartItem) {
        if (cartItem.quantity > 0) {
            dispatch({ type: "DECREASE_QUANTITY", payload: cartItem.id })

        }
        else {
            return;
        }
    }
    function handleIncreaseQuantity(cartItem) {
        console.log("increasing", cartItem.id)
        dispatch({ type: "INCREASE_QUANTITY", payload: cartItem.id })

    }
    function handleSaveForLater(cartItem) {
        dispatch({ type: "SAVE_FOR_LATER", payload: cartItem })

    }
    function handleBuy(savedForLaterItem) {
        dispatch({ type: "MOVE_TO_CART", payload: savedForLaterItem })
    }

    function getTotal() {
        let sum = 0;
        cart.map((item) => {
            sum += item.price * item.quantity
        })
        return sum
    }

    console.log("saveForLater", saveForLater)
    return (
        <div>
            <h1>Cart : {cart.length}</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    {
                        cart.map((cartItem) => (
                            <>
                                <div><img src={cartItem.image} alt="" /></div>
                                <div style={{ textAlign: 'left', margin: "1rem" }}>
                                    <p>{cartItem.name}</p>
                                    <p>Rs. {cartItem.price}</p>
                                    <div>
                                        <button onClick={() => handleDecreaseQuantity(cartItem)}>-</button>
                                        <span style={{ margin: "0.5rem" }}>{cartItem.quantity}</span>
                                        <button onClick={() => handleIncreaseQuantity(cartItem)}>+</button>
                                    </div>
                                    <button onClick={() => handleSaveForLater(cartItem)}>Save For Later</button>

                                </div>
                            </>
                        ))
                    }
                </div>
                <div>
                    <p>Total : {getTotal()}</p>
                </div>
            </div>

            <h1>Save For Later : {saveForLater.length}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    saveForLater.map((savedForLaterItem) => (
                        <>
                            <div><img src={savedForLaterItem.image} alt="" /></div>
                            <div style={{ textAlign: 'left', margin: "1rem" }}>
                                <p>{savedForLaterItem.name}</p>
                                <p>Rs. {savedForLaterItem.price}</p>

                                <button onClick={() => handleBuy(savedForLaterItem)}>Buy</button>

                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
