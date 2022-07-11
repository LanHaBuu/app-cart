import { useParams } from "react-router-dom"
import useFetch from "../../hook/useFetch"

import classNames from "classnames/bind"
import styles from "./ProductDetail.module.css"
import { useContext, useRef } from "react"
import { DataContext } from "../../context/DataProvider"
import SkelatonProductDetail from "../../components/Skelaton/SkelatonProductDetail"

const cx = classNames.bind(styles)

function ProductDetail() {
	const { id } = useParams()
	const imgRef = useRef()
	const {
		data: product,
		loading,
		error,
	} = useFetch(`https://api.escuelajs.co/api/v1/products/${id}`)

	const check = Object.keys(product)
	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.target.getBoundingClientRect()
		const x = ((e.pageX - left) / width) * 100
		const y = ((e.pageY - top) / height) * 100
		imgRef.current.style.backgroundPosition = `${x}% ${y}%`
	}

	const { addCart } = useContext(DataContext)

	if (loading) {
		return <SkelatonProductDetail />
	}

	if (error) {
		return <></>
	}

	return (
		<div className="container mt-5">
			{check && check.length > 0 && (
				<div className="row">
					<div className="col-lg-6">
						<div
							className={cx("img-product-detail")}
							style={{ backgroundImage: `url(${product.category.image})` }}
							ref={imgRef}
							onMouseMove={handleMouseMove}
							onMouseLeave={() =>
								(imgRef.current.style.backgroundPosition = "center")
							}
						></div>
					</div>
					<div className={cx("col-lg-6", "body")}>
						<h2 className={cx("title")}>{product.title}</h2>
						<div className={cx("price")}>$ {product.price}</div>
						<div className={cx("des")}>{product.description}</div>
						<div className={cx("category")}>Category: {product.category.name}</div>
						<button
							className={cx("btn btn-dark", "btn-add")}
							onClick={() => {
								addCart(product.id)
							}}
						>
							Thêm vào giỏ hàng
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductDetail
