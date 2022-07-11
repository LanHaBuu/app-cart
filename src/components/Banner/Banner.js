import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./Banner.module.css"

const cx = classNames.bind(styles)

function Banner({ banner }) {
	return (
		<div className={cx("wrapper-banner")}>
			<img src={banner} className="img-fluid" />
			<Link to="/products" className={cx("banner-btn")}></Link>
		</div>
	)
}

export default Banner
