

import React, { createContext, useContext, useReducer } from 'react'
import { initialState, reducer } from './ShopReducer'


 export const  ShopContext = createContext(initialState)

const ShopProvider = ({children}) => {







       const [state , dispatch]   =  useReducer(reducer, initialState)






         function addToCart(product) {


            // check if the product exist in cart if exist in cart add quantity 1 if not exist add product


            const productIndex =  state.products.findIndex((p) => p.id === product.id)
            console.log(productIndex , "productIndex")


            let updatedProduct = [...state.products]

            // 0 1


            if(productIndex !== -1) {

                updatedProduct[productIndex] = {


                    ...updatedProduct[productIndex],
                    quantity: updatedProduct[productIndex].quantity + 1
                } 

            } else {


                 updatedProduct = [...updatedProduct, {...product, quantity: 1}]


            }

            calculateTotal(updatedProduct)


            localStorage.setItem('products', JSON.stringify(updatedProduct))



            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    products: updatedProduct
                }
            })





          
        }






        
        function removeFromCart(product) {

          

            const updatedProduct =  state.products.filter((p) => p.id !== product.id)

            calculateTotal(updatedProduct)
            localStorage.setItem('products', JSON.stringify(updatedProduct))

            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: {
                    products: updatedProduct
                }
            })

          


        }

        


        function updateCartQuantity(product, quantity) {

            const productIndex =  state.products.findIndex((p) => p.id === product.id)

            const updatedProduct = [...state.products]

            updatedProduct[productIndex] = {


                ...updatedProduct[productIndex],
                quantity: quantity
            }


            calculateTotal(updatedProduct)


            dispatch({
                type: 'UPDATE_CART_Quantity',
                payload: {
                    products: updatedProduct
                }
            })


         
            

        }

// calculateTotal
        
        function calculateTotal(products) {
                
             
            let total = 0


            products.forEach((product) => {
                    
                    total += product.price * product.quantity
            })


                dispatch({
                    type: 'TOTAL_ITEMS',
                    payload: {
                        totalItems: total
                    }
                })

        }




        // clearCart


        function clearCart() {

            dispatch({
                type: 'CLEAR_CART',
                payload:[]
            })

        }





        return (
            <ShopContext.Provider value={{
                products: state.products,
                totalItems: state.totalItems,
                addToCart,
                removeFromCart,
                updateCartQuantity,
                clearCart
            }}>
                {children}
            </ShopContext.Provider>
        )








    







 
}


 export const useShop = () => {
	const context = useContext(ShopContext);

	if (context === undefined) {
		throw new Error("context must be inside shop contetx");
	}

	return context;
};


export default ShopProvider
