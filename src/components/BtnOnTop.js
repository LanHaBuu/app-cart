import { BsFillArrowUpCircleFill } from "react-icons/bs"
import { useState, useEffect } from "react"

function BtnOnTop() {
	const [showBtnOnTop, setShowBtnOnTop] = useState()
	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY > 500) {
				setShowBtnOnTop(true)
			} else {
				setShowBtnOnTop(false)
			}
		}
	}, [])
	const handleToTop = () => {
		window.scroll({
			top: 100,
		})
	}
	return (
		<>
			{showBtnOnTop && (
				<div
					style={{
						position: "fixed",
						bottom: 20,
						right: 20,
						cursor: "pointer",
						fontSize: 35,
						color: "crimson",
						padding: 10,
					}}
					onClick={handleToTop}
				>
					<BsFillArrowUpCircleFill />
				</div>
			)}{" "}
		</>
	)
}

export default BtnOnTop
