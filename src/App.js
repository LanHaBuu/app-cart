import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Search from "./pages/Search/Search"
import CartProduct from "./pages/CartProduct/CartProduct"
import News from "./pages/News/News"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/app-cart" element={<Home />} />
					<Route path="/products" element={<Product />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/search" element={<Search />} />
					<Route path="/cart" element={<CartProduct />} />
					<Route path="/news" element={<News />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App

