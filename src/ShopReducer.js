
// addToCart
// removeFromCart
// updateCart
// clearCart
// totalItems




export const initialState = {
   
      products:  localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    totalItems: 0
}





export function reducer(state ,action) {

    const {type, payload} = action;



    switch (type) {



        case 'ADD_TO_CART':
            return {
                ...state,
                products : payload.products
              
            }


            case 'REMOVE_FROM_CART':

            return {
                ...state,
                products : payload.products
            }





            case 'UPDATE_CART_Quantity':
                return {
                    ...state,
                    products : payload.products
                }




            case 'CLEAR_CART':
                return  initialState
                

            
            case 'TOTAL_ITEMS':
                return {
                    ...state,
                    totalItems : payload.totalItems
                }

                
    
        default:
             return state;
    }





    
} 