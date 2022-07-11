import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
function SkelatonProductDetail() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-6">
					<Skeleton height={450} />
				</div>
				<div className="col-lg-6 d-flex flex-column justify-content-between">
					<div>
						<Skeleton height={50} width={340} />
					</div>
					<div>
						<Skeleton height={37} width={120} />
					</div>
					<div>
						<Skeleton height={70} />
					</div>
					<div className="text-end">
						<Skeleton height={30} width={200} />
					</div>
					<div>
						<Skeleton height={50} width={300} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkelatonProductDetail
