import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import { FaFilter } from "react-icons/fa"

import styles from "./ProductCart.module.css"
import Filter from "../Filter/Filter"
import { useContext } from "react"
import { DataContext } from "../../context/DataProvider"
import Rating from "../Rating"
import useFetch from "../../hook/useFetch"

const cx = classNames.bind(styles)

function ProductCart({ productSliced }) {
	const { data } = useFetch("https://api.escuelajs.co/api/v1/products")
	const { addCart } = useContext(DataContext)
	const value = useContext(DataContext)
	const [productData] = value.productData
	const [check] = value.check

	const tranformProduct = () => {
		let sortedProduct = productSliced
		if (productData.toString()) {
			sortedProduct = data.filter((item) => item.title.toLowerCase().includes(productData))
		} else {
			sortedProduct = sortedProduct.filter((item) =>
				item.title.toLowerCase().includes(productData)
			)
		}
		if (check) {
			sortedProduct = sortedProduct.sort((a, b) =>
				check === "lowToHigh" ? a.price - b.price : b.price - a.price
			)
		}

		return sortedProduct
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-3">
					<div className="filter">
						<div className={cx("filter-header")}>
							<FaFilter className={cx("filter-icon")} />
							<span className={cx("filter-title")}>Lọc</span>
						</div>
						<Filter />
					</div>
				</div>
				<div className="col-lg-9">
					<div className="row">
						{tranformProduct().map((product) => (
							<div className="col-xl-4 col-md-6 mb-4" key={product.id}>
								<div className={cx("product")}>
									<Link to={`/products/${product.id}`}>
										<img
											src={product.category.image}
											className={cx("card-img")}
											alt={product.title}
										/>
									</Link>
									<div className={cx("card-body")}>
										<h5 className={cx("card-title")}>{product.title}</h5>
										<p className={cx("card-desc")}>{product.description}</p>
										<div className={cx("wrapper-price-rating")}>
											<p className={cx("card-price")}>$ {product.price}</p>
											<p className={cx("card-rating")}>
												<Rating rating={product.rating} />
											</p>
										</div>

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
			</div>
		</div>
	)
}

export default ProductCart
