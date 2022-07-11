import { AiFillStar, AiOutlineStar } from "react-icons/ai"

function Rating({ rating }) {
	return (
		<>
			{[...Array(5)].map((_, i) => (
				<span key={i}>
					{rating > i ? (
						<AiFillStar fontSize="1.2rem" />
					) : (
						<AiOutlineStar fontSize="1.2rem" />
					)}
				</span>
			))}
		</>
	)
}

export default Rating
