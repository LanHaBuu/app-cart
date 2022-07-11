import classNames from "classnames/bind"
import styles from "./News.module.css"

const cx = classNames.bind(styles)

function News() {
	return (
		<div className={cx("wrapper-news")}>
			<div className="container mt-3">
				<div className="row">
					<div className="col-lg-12">
						<iframe
							className={cx("news-youtube")}
							width="1280"
							height="720"
							src="https://www.youtube.com/embed/23yJOu9LSwE"
							title="Video Quảng cáo giày Adidas"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default News
