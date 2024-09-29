import React, { useState ,useEffect} from 'react'
import ProductItem from './ProductItem'

import axios from 'axios';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);



	useEffect(() => {


		const fetchProducts = async () => {

			try {
				setLoading(true);
				const { data } = await axios.get(
					"https://dummyjson.com/products?limit=30"
				);

				setProducts(data.products);
				// setOriginalProducts(data.products);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				console.log(e);
			}
		};
		fetchProducts();
	}, []);


    // console.log(products)
 
  




    if(loading) return <ProductLoadingSkeleton />

    
  return (
    <div 

    className='grid  grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 mt-10'
    
    >

{products.length > 0 &&
					products.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}





    </div>
  )
}

export default ProductList