import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
function SkelatonHome() {
	return (
		<div className="container mt-5">
			<div className="row mb-5">
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-lg-12">
					<Skeleton height={250} />
				</div>
			</div>
			<div className="mt-3">
				<Skeleton width={100} height={40} />
			</div>
			<div className="row mb-5">
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
				<div className="col-lg-3">
					<Skeleton height={250} />
				</div>
			</div>
		</div>
	)
}

export default SkelatonHome
