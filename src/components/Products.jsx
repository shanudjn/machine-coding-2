import React, { useEffect } from 'react'
import axios from 'axios'
import { useProduct } from '../context/ProductContext'

export default function Products() {
    const { state: { products, cart }, dispatch } = useProduct()

    useEffect(() => {
        (async function () {
            const response = await axios.get("products.json")

            dispatch({ type: "SET_PRODUCTS", payload: response.data.products })

        })()
    }, [dispatch])

    function handleAddToCart(product) {
        console.log(product)
        product.quantity = 1
        dispatch({ type: "ADD_TO_CART", payload: product })
    }

    console.log("cart", cart)
    return (
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center" }}>
            {
                products.map((product) => (
                    <div key={product.id} style={{ margin: "1rem" }}>
                        <img src={product.image} alt="" />
                        <div style={{ textAlign: "left" }}>
                            <p>{product.name}</p>
                            <p>{product.brand}</p>
                            <h3>Rs. {product.price}</h3>
                            {
                                product.sizes.map((size) => (
                                    <span style={{ margin: "0.25rem" }}>{size}</span>
                                ))
                            }
                        </div>
                        <button onClick={() => handleAddToCart(product)}
                            style={{ width: "100%", margin: "0.5rem" }}>Add To Cart</button>

                    </div>
                ))
            }
        </div>
    )
}
