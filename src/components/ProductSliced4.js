import { Link } from "react-router-dom"

function ProductSliced4({ productSliced, title }) {
	return (
		<div className="container">
			<div className="row">
				<h3 className="mb-3" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
					{title}
				</h3>
				{productSliced.length > 0 &&
					productSliced.map((item) => (
						<div className="col-lg-3 col-md-6" key={item.id}>
							<Link to={`/products/${item.id}`}>
								<img src={item.category.image} className="img-fluid" />
							</Link>
							<h5 className="mt-3">{item.title}</h5>
							<p style={{ color: "crimson", fontWeight: "600", fontSize: "20" }}>
								$ {item.price}
							</p>
						</div>
					))}
			</div>
		</div>
	)
}

export default ProductSliced4
