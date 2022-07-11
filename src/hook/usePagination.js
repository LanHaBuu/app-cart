import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function usePagination(totalPage, currentPage) {
	const [firstArr, setFirstArr] = useState([])
	const [lastArr, setLastArr] = useState([])

	useEffect(() => {
		const newArr = [...Array(totalPage)].map((_, i) => i + 1)
		if (totalPage - currentPage >= 5) {
			setFirstArr(newArr.slice(currentPage - 1, currentPage + 3))
			setLastArr(newArr.slice(totalPage - 1))
		} else {
			setFirstArr(newArr.slice(totalPage - 5, totalPage))
			setLastArr([])
		}
		if (totalPage < 5) {
			setFirstArr(newArr)
		}
	}, [totalPage, currentPage])

	const isActive = (id) => {
		if (id === currentPage) return "pageActive"
		return ""
	}

	const navigate = useNavigate()

	const firtPage = () => {
		navigate(`?page=1`)
	}

	const prev = () => {
		const newPage = Math.max(currentPage - 1, 1)
		navigate(`?page=${newPage}`)
	}

	const next = () => {
		const newPage = Math.min(currentPage + 1, totalPage)
		navigate(`?page=${newPage}`)
	}

	const jumb = (num) => {
		navigate(`?page=${num}`)
	}

	const lastPage = () => {
		navigate(`?page=${totalPage}`)
	}
	return { firstArr, lastArr, isActive, prev, next, jumb, firtPage, lastPage }
}

export default usePagination
