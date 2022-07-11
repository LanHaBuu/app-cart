import {
	FaChevronLeft,
	FaChevronRight,
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
} from "react-icons/fa"
import "./Pagination.css"
import usePagination from "../../hook/usePagination"
function Pagination({ totalPage, currentPage }) {
	const { firstArr, lastArr, isActive, prev, next, jumb, firtPage, lastPage } = usePagination(
		totalPage,
		currentPage
	)
	return (
		<div className="container mb-5 mt-3">
			<div className="row">
				<div className="col-xl-8 text-center">
					<div className="page-number">
						<FaAngleDoubleLeft
							className="double-back"
							onClick={firtPage}
							style={{ cursor: "pointer", fontSize: 39, marginRight: 20 }}
						/>
						<FaChevronLeft
							className="back"
							onClick={prev}
							style={{ cursor: "pointer", fontSize: 30 }}
						/>

						{firstArr.map((num) => (
							<button
								key={num}
								className={`${isActive(num)} btn-page`}
								onClick={() => jumb(num)}
							>
								{num}
							</button>
						))}

						{lastArr.length > 0 && <button className="btn-page">...</button>}

						{lastArr.map((num) => (
							<button
								key={num}
								className={`${isActive(num)} btn-page`}
								onClick={() => jumb(num)}
							>
								{num}
							</button>
						))}
						<FaChevronRight
							className="next"
							onClick={next}
							style={{ cursor: "pointer", marginLeft: 10, fontSize: 30 }}
						/>
						<FaAngleDoubleRight
							className="double-next"
							onClick={lastPage}
							style={{ cursor: "pointer", fontSize: 39, marginLeft: 10 }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pagination
