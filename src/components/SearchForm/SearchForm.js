import { useNavigate } from "react-router-dom"
import classNames from "classnames/bind"
import { toast } from "react-toastify"

import style from "./SearchForm.module.css"
import { useEffect, useRef, useState } from "react"
import useFetch from "../../hook/useFetch"

const cx = classNames.bind(style)

function SearchForm() {
	const { data } = useFetch("https://api.escuelajs.co/api/v1/products")
	const [newData, setNewData] = useState([])
	const [check, setCheck] = useState(false)
	const inputRef = useRef()
	const navigate = useNavigate()
	const handleSearch = () => {
		const { value } = inputRef.current
		// if (!value.trim()) return
		// return navigate(`/search?category=${value}`)
		if (newData.length > 0) {
			newData.forEach((item) => {
				if (value.trim() === item) {
					return navigate(`/search?category=${value}`)
				} else {
					setCheck(true)
				}
			})
		}
	}

	const coppyText = (key) => {
		inputRef.current.value = key
	}

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	useEffect(() => {
		if (data) {
			const name = data.map((item) => item.category.name)
			const newArr = Array.from(new Set(name))
			setNewData(newArr)
		}
	}, [data])

	useEffect(() => {
		if (check)
			toast.error("Danh mục bạn cần tìm không có, vui lòng nhập đúng các danh mục ở trên")
	}, [check])

	return (
		<div className={cx("search-form")}>
			<div className={cx("category-name")}>
				<h5 className="mb-3">Các danh mục:</h5>
				<span onClick={() => coppyText("Clothes")}>Clothes</span>
				<span onClick={() => coppyText("Electronics")}>Electronics</span>
				<span onClick={() => coppyText("Furniture")}>Furniture</span>
				<span onClick={() => coppyText("Shoes")}>Shoes</span>
				<span onClick={() => coppyText("Others")}>Others</span>
			</div>
			<input
				className={cx("search-input")}
				placeholder="Nhập danh mục bạn muốn tìm ..."
				spellCheck="false"
				ref={inputRef}
				onKeyPress={(e) => e.code === "Enter" && handleSearch()}
			/>
			<button onClick={handleSearch} className={cx("search-btn")}>
				Tìm kiếm
			</button>
		</div>
	)
}

export default SearchForm
