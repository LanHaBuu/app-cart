import { Dropdown } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import styles from "./Cart.module.css"
import { useState } from "react"

const cx = classNames.bind(styles)

function Cart({ cart }) {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="dark" id="dropdown-basic" className={cx("wrapper-cart")}>
				<span className="shoping-cart">
					<span className={cx("cart-icon")}>
						<FaShoppingCart />
					</span>
					<span className={cx("cart-quantity")}>{cart.length}</span>
				</span>
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<div className={cx("wrapper-cart-added")}>
					{cart.length > 0 &&
						cart.map((item) => (
							<div className={cx("cart-added")} key={item.id}>
								<img className={cx("cart-added-img")} src={item.category.image} />
								<span className={cx("cart-added-name")}>{item.title}</span>
								<span className={cx("cart-added-price")}>$ {item.price}</span>
							</div>
						))}
					{cart.length > 0 ? (
						<Link to="/cart" className={cx("cart-button")}>
							Đi đến giỏ hàng
						</Link>
					) : (
						<div>Giỏ hàng trống</div>
					)}
				</div>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default Cart
