import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContex from './contex.jsx'
import ThemeProvider from './Theme.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/Products.jsx'
import Product from './pages/Product .jsx'
import Cart from './pages/Cart .jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import ShopProvider from './ShopContex.jsx'


const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			// {
			// 	index: true,
			// 	element: <Products />,
			// },
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/product-details/:id",
				element: <Product />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ShopProvider>
<RouterProvider router={routerProvider} />
</ShopProvider>
   
   

  </StrictMode>,
)
