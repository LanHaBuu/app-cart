import { useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import "react-loading-skeleton/dist/skeleton.css"

import useFetch from "../hook/useFetch"
import ProductCart from "../components/ProductCart/ProductCart"
import Pagination from "../components/Pagination/Pagination"
import { DataContext } from "../context/DataProvider"
import SkelatonProduct from "../components/Skelaton/SkelatonProduct"

function Product() {
	const { data, loading, error } = useFetch(`https://api.escuelajs.co/api/v1/products`)
	const value = useContext(DataContext)
	const [productData] = value.productData

	const [products, setProducts] = useState(data)
	const [currentPage, setCurrentPage] = useState(1)
	const [productPerPage] = useState(9)
	const [totalPage, setTotalPage] = useState(0)
	const [productSliced, setProductSliced] = useState([])

	const lastProduct = currentPage * productPerPage
	const firstProduct = lastProduct - productPerPage

	useEffect(() => {
		const filter = products.slice(firstProduct, lastProduct)
		if (filter) setProductSliced(filter)
	}, [products, totalPage, currentPage])

	const { search } = useLocation()

	useEffect(() => {
		if (data) setProducts(data)
	}, [data])

	useEffect(() => {
		const page = new URLSearchParams(search).get("page") || 1
		setCurrentPage(Number(page))
	}, [search])

	useEffect(() => {
		if (!products.length > 0) return
		const total = Math.ceil(products.length / productPerPage)
		setTotalPage(total)
	}, [products.length])

	if (loading) {
		return <SkelatonProduct />
	}
	if (error) {
		return <></>
	}

	return (
		<>
			<ProductCart productSliced={productSliced} />
			{productData.toString() || (
				<Pagination totalPage={totalPage} currentPage={currentPage} />
			)}
		</>
	)
}

export default Product
