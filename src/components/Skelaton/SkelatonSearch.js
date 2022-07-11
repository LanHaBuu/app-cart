import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
function SkelatonSearch() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-4 mb-4">
					<Skeleton height={550} />
				</div>
				<div className="col-lg-4 mb-4">
					<Skeleton height={550} />
				</div>
				<div className="col-lg-4 mb-4">
					<Skeleton height={550} />
				</div>
				<div className="col-lg-4 mb-4">
					<Skeleton height={550} />
				</div>
				<div className="col-lg-4 mb-4">
					<Skeleton height={550} />
				</div>
				<div className="col-lg-4 mb-4">
					<Skeleton height={550} />
				</div>
			</div>
		</div>
	)
}

export default SkelatonSearch
