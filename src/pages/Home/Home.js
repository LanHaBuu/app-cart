import classNames from "classnames/bind"
import { useEffect, useRef, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import TopRating from "../../components/TopRating/TopRating"
import styles from "./Home.module.css"
import useFetch from "../../hook/useFetch"
import BtnSlide from "../../components/BtnSlide"
import banner1 from "../../../src/assests/image/banner/promo-banner-1.png"
import banner2 from "../../../src/assests/image/banner/promo-banner-2.png"
import banner3 from "../../../src/assests/image/banner/promo-banner-3.png"
import ProductSliced4 from "../../components/ProductSliced4"
import Banner from "../../components/Banner/Banner"
import SkelatonHome from "../../components/Skelaton/SkelatonHome"
import BtnOnTop from "../../components/BtnOnTop"

const cx = classNames.bind(styles)

function Home() {
	const {
		data: products,
		loading,
		error,
	} = useFetch("https://api.escuelajs.co/api/v1/products/")
	const [productSliced, setProductSliced] = useState([])
	const [productPriceMini, setProductPriceMini] = useState([])

	useEffect(() => {
		if (products) {
			const random = Math.floor(Math.random() * 100)
			const newArr = products.slice(random, random + 4)
			setProductSliced(newArr)
		}
		if (products) {
			const random = Math.floor(Math.random() * 10)
			const priceMini = products.filter(item => item.price < 100)
			const newArrPriceMini = priceMini.slice(random, random + 4)
			setProductPriceMini(newArrPriceMini)
		}
	}, [products])

	const appRef = useRef()
	const { handleLeft, handleRight } = BtnSlide(appRef)

	if (loading) {
		return <SkelatonHome />
	}

	if (error) {
		return <></>
	}

	return (
		<>
			<div className={cx("container", "wrapper")}>
				<div className='mb-2'>
					<h3 className={cx("home-title")}>Sản phẩm bán chạy</h3>
				</div>
				<div className={cx("app")} ref={appRef}>
					<TopRating />
				</div>
				<div className={cx("buttons")}>
					<div className={cx("prev-btn")} onClick={handleLeft}>
						<FaAngleLeft />
					</div>
					<div className={cx("next-btn")} onClick={handleRight}>
						<FaAngleRight />
					</div>
				</div>
			</div>

			<Banner banner={banner1} />

			<ProductSliced4
				productSliced={productSliced}
				title='citizen lựa chọnádsad'
			/>

			<Banner banner={banner2} />

			<ProductSliced4
				productSliced={productPriceMini}
				title='giá thấp hơn "hãng"'
			/>

			<Banner banner={banner3} />

			<BtnOnTop />
		</>
	)
}

export default Home
