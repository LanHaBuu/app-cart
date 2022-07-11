import { useContext } from "react"
import classNames from "classnames/bind"
import { AiOutlineSearch } from "react-icons/ai"

import styles from "./Input.module.css"
import { DataContext } from "../../context/DataProvider"

const cx = classNames.bind(styles)

function Input() {
	const value = useContext(DataContext)
	const [productData, setProductData] = value.productData

	return (
		<div className={cx("wrapper-input")}>
			<input
				className={cx("input-search-name")}
				placeholder="Nhập tên sản phẩm bạn muốn tìm ..."
				spellCheck="false"
				onChange={(e) => setProductData(e.target.value)}
			/>
			<button className={cx("btn-input")}>
				<AiOutlineSearch />
			</button>
		</div>
	)
}

export default Input
