import { useContext, useRef, useState } from "react"
import classNames from "classnames/bind"
import { AiOutlineSearch } from "react-icons/ai"

import styles from "./Filter.module.css"
import Modal from "../Modal/Modal"
import SearchForm from "../SearchForm/SearchForm"
import { DataContext } from "../../context/DataProvider"

const cx = classNames.bind(styles)

function Filter() {
	const [showModal, setShowModal] = useState(false)
	const value = useContext(DataContext)
	const [check, setCheck] = value.check

	const inputIncreaseRef = useRef()
	const inputDecreaseRef = useRef()

	const handleUncheck = () => {
		inputIncreaseRef.current.checked = false
		inputDecreaseRef.current.checked = false
	}

	return (
		<>
			<div>
				<div className={cx("search-category")}>
					<span className={cx("search-category-icon")}>
						<AiOutlineSearch />
					</span>
					<button
						className={cx("search-category-btn")}
						onClick={() => setShowModal(true)}
					>
						Tìm kiếm theo danh mục
					</button>
				</div>
				<div className={cx("filter-price")}>
					<div className={cx("filter-price-title")}>Tìm kiếm theo giá:</div>
					<form>
						<div className={cx("increase")}>
							<input
								type="radio"
								name="form1"
								ref={inputIncreaseRef}
								onChange={() => setCheck("lowToHigh")}
							/>
							<label>Giá thấp đến cao</label>
						</div>
						<div className={cx("decrease")}>
							<input
								type="radio"
								name="form1"
								ref={inputDecreaseRef}
								onChange={() => setCheck("hightToLow")}
							/>
							<label>Giá cao đến thấp</label>
						</div>
					</form>
					<button
						className={cx("close-filter")}
						onClick={() => {
							setCheck("")
							handleUncheck()
						}}
					>
						Bỏ lọc
					</button>
				</div>
			</div>

			{showModal && (
				<Modal header={"Danh mục"} setShowModal={() => setShowModal(false)}>
					<SearchForm />
				</Modal>
			)}
		</>
	)
}

export default Filter
