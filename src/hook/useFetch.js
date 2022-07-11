import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
function useFetch(url) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		let here = true
		setLoading(true)
		axios
			.get(url)
			.then((res) => {
				if (!here) {
					return
				} else {
					for (let i = 0; i < res.data.length; i++) {
						res.data[i].quantity = 1
						res.data[i].rating = Math.floor(Math.random() * 5 + 1)
					}
					setData(res.data)
					setLoading(false)
				}
			})
			.catch((err) => {
				if (!here) return
				setError(err.message)
				toast.error(err.message)
				setLoading(false)
			})
		return () => (here = false)
	}, [url])

	return { data, loading, error }
}

export default useFetch
