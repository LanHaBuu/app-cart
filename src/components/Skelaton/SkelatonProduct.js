import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function SkelatonProduct() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-3">
					<Skeleton height={300} />
				</div>
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-4 mb-4">
							<Skeleton height={380} />
						</div>
						<div className="col-lg-4 mb-4">
							<Skeleton height={380} />
						</div>
						<div className="col-lg-4 mb-4">
							<Skeleton height={380} />
						</div>
						<div className="col-lg-4 mb-4">
							<Skeleton height={380} />
						</div>
						<div className="col-lg-4 mb-4">
							<Skeleton height={380} />
						</div>
						<div className="col-lg-4 mb-4">
							<Skeleton height={380} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkelatonProduct
