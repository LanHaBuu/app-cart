import { useContext, useEffect, useState } from "react"
import classNames from "classnames/bind"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import { GrClose } from "react-icons/gr"

import { DataContext } from "../../context/DataProvider"
import styles from "./CartProduct.module.css"

const cx = classNames.bind(styles)

function CartProduct() {
	const value = useContext(DataContext)
	const [cartData, setCardData] = value.cart
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const totalPayment = cartData.reduce((arr, cur) => {
			return arr + cur.price * cur.quantity
		}, 0)
		setTotal(totalPayment)
	}, [cartData])

	if (cartData.length === 0) {
		return <h2 className="text-center mt-5 display-2">Giỏ hàng trống</h2>
	}

	const decrease = (id) => {
		cartData.forEach((item) => {
			if (item.id === id) {
				item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1)
			}
			setCardData([...cartData])
		})
	}

	const increase = (id) => {
		cartData.forEach((item) => {
			if (item.id === id) {
				item.quantity += 1
			}
		})
		setCardData([...cartData])
	}

	const handleDelete = (index) => {
		cartData.splice(index, 1)
		setCardData([...cartData])
	}

	return (
		<div className="container mt-5">
			{cartData &&
				cartData.length > 0 &&
				cartData.map((product, index) => (
					<div className="row mb-5" key={product.id}>
						<div className="col-lg-6">
							<div
								className={cx("img-product-detail")}
								style={{ backgroundImage: `url(${product.category.image})` }}
							></div>
						</div>
						<div className={cx("col-lg-6", "body")}>
							<h2 className={cx("title")}>{product.title}</h2>
							<div className={cx("price")}>$ {product.price}</div>
							<div className={cx("des")}>{product.description}</div>
							<div className={cx("category")}>Category: {product.category.name}</div>
							<div className="amount">
								<span
									onClick={() => decrease(product.id)}
									className={cx("btn-minus")}
								>
									<AiFillMinusCircle />
								</span>
								<span className={cx("quantity")}>{product.quantity}</span>
								<span
									onClick={() => increase(product.id)}
									className={cx("btn-plus")}
								>
									<AiFillPlusCircle />
								</span>
							</div>
							<div className={cx("delete")} onClick={() => handleDelete(index)}>
								<GrClose />
							</div>
						</div>
					</div>
				))}
			<div className="total text-end">
				<h3 className="fw-bold">Total: ${total}</h3>
			</div>
		</div>
	)
}

export default CartProduct
