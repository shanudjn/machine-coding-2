import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./ProductReducer";


export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProduct() {
    return useContext(ProductContext)
}