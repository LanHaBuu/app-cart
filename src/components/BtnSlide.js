function BtnSlide(appRef) {
	const handleLeft = () => {
		const slide = appRef.current
		slide.scrollLeft -= slide.offsetWidth
		if (slide.scrollLeft <= 0) {
			slide.scrollLeft = slide.scrollWidth
		}
	}

	const handleRight = () => {
		const slide = appRef.current
		slide.scrollLeft += slide.offsetWidth
		if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
			slide.scrollLeft = 0
		}
	}
	return { handleLeft, handleRight }
}

export default BtnSlide
