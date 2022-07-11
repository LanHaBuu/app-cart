import { NavLink, Link } from "react-router-dom"
import { BsMenuUp } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { useContext, useState } from "react"
import classNames from "classnames/bind"

import styles from "./Header.module.css"
import { DataContext } from "../../context/DataProvider"
import Input from "../Input/Input"
import Cart from "../Cart/Cart"

const cx = classNames.bind(styles)

let activeStyle = {
	borderBottom: "1px solid red",
	color: "red",
}

function Header() {
	const value = useContext(DataContext)
	const [cart] = value.cart
	const [showMenuMobile, setShowMenuMobile] = useState(false)
	const [showInput, setShowInput] = useState(false)

	const toggleShow = () => {
		setShowMenuMobile(!showMenuMobile)
	}

	const styleMenu = {
		left: showMenuMobile ? 0 : "-100%",
	}

	return (
		<div className={cx("container-fluid", "wrapper")}>
			<div className={cx("container", "header")}>
				<div className="row align-items-center">
					<div className={cx("col-lg-2", "logo")}>
						<Link to="/app-cart" onClick={() => setShowInput(false)}>
							CITIZEN
						</Link>
					</div>

					<div className="col-lg-4">{showInput && <Input />}</div>

					<div className={cx("col-lg-6", "navigation")} style={styleMenu}>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to="/app-cart"
							onClick={() => setShowInput(false)}
						>
							Trang chủ
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to="/products"
							onClick={() => setShowInput(true)}
						>
							Sản phẩm
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to="/news"
							onClick={() => setShowInput(false)}
						>
							Tin tức
						</NavLink>

						<span
							className={cx("close-menu")}
							onClick={() => {
								toggleShow()
								setShowInput(false)
							}}
						>
							<GrClose />
						</span>

						<Cart cart={cart} />
					</div>
					<div className={cx("menu-mobile")}>
						<BsMenuUp onClick={toggleShow} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
