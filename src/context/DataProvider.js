import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import useFetch from "../../src/hook/useFetch"

export const DataContext = createContext()

function DataProvider({ children }) {
	const [productData, setProductData] = useState([])
	const [check, setCheck] = useState()

	const [cart, setCart] = useState([])
	const { data: products } = useFetch("https://api.escuelajs.co/api/v1/products")

	const addCart = (id) => {
		const check = cart.every((item) => item.id !== id)
		if (check) {
			const data = products.filter((item) => item.id === id)
			setCart([...cart, ...data])
			toast.success("Thêm vào giỏ hàng thành công")
		} else {
			toast.error("Sản phẩm đã có trong giỏ hàng")
		}
	}

	useEffect(() => {
		const dataCart = JSON.parse(localStorage.getItem("dataCart"))
		if (dataCart) setCart(dataCart)
	}, [])

	useEffect(() => {
		if (cart.length > 0) {
			localStorage.setItem("dataCart", JSON.stringify(cart))
		}
	}, [cart])

	const value = {
		productData: [productData, setProductData],
		cart: [cart, setCart],
		check: [check, setCheck],
		addCart,
	}

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider
