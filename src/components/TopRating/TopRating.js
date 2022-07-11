import { useEffect, useState } from "react"
import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import styles from "./TopRating.module.css"
import Rating from "../../components/Rating"
import useFetch from "../../../src/hook/useFetch"

const cx = classNames.bind(styles)

function TopRating() {
	const { data } = useFetch("https://api.escuelajs.co/api/v1/products/")
	const [topRating, setTopRating] = useState([])

	useEffect(() => {
		if (data) {
			const newArrTopRating = data.filter((item) => {
				return item.rating === 5
			})
			setTopRating(newArrTopRating)
		}
	}, [data])

	return (
		<>
			{topRating.length > 0 &&
				topRating.map((product) => (
					<div className={cx("card")} key={product.id}>
						<Link to={`/products/${product.id}`}>
							<img src={product.category.image} />
						</Link>
						<div>
							<h4 className={cx("product-title")}>{product.title}</h4>
							<p className={cx("product-description")}>{product.description}</p>
							<p className={cx("rating")}>
								<Rating rating={product.rating} />
							</p>
						</div>
					</div>
				))}
		</>
	)
}

export default TopRating
