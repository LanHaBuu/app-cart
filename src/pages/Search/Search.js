import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import styles from "./Search.module.css"
import useFetch from "../../hook/useFetch"
import { DataContext } from "../../context/DataProvider"
import SkelatonSearch from "../../components/Skelaton/SkelatonSearch"

const cx = classNames.bind(styles)

function Search() {
	const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products")
	const { addCart } = useContext(DataContext)
	const [products, setProducts] = useState([])
	const [filter, setFilter] = useState([])

	useEffect(() => {
		if (data) setProducts(data)
	}, [data])

	useEffect(() => {
		if (data) setFilter(data)
	}, [data])

	const { search } = useLocation()

	useEffect(() => {
		const value = new URLSearchParams(search).get("category")
		const update = products.filter((item) => item.category.name === value)
		setFilter(update)
	}, [search, products])

	if (loading) {
		return <SkelatonSearch />
	}

	if (error) {
		return <></>
	}

	return (
		<div className="container mt-5">
			<div className="row">
				{filter &&
					filter.length < 100 &&
					filter.map((product) => (
						<div className="col-lg-4" key={product.id}>
							<div className="card mb-4">
								<Link to={`/products/${product.id}`}>
									<img
										src={product.category.image}
										className={cx("card-img")}
										alt={product.title}
									/>
								</Link>
								<div className={cx("card-body")}>
									<div className={cx("card-header")}>
										<h5 className={cx("card-title")}>{product.title}</h5>
										<p className={cx("card-category")}>
											Danh mục: {product.category.name}
										</p>
									</div>
									<p className={cx("card-desc")}>{product.description}</p>
									<p className={cx("card-price")}>$ {product.price}</p>
									<button
										className="btn btn-dark"
										onClick={() => {
											addCart(product.id)
										}}
									>
										Thêm vào giỏ hàng
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default Search
