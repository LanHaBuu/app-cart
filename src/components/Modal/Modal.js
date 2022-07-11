import classNames from "classnames/bind"
import { AiOutlineClose } from "react-icons/ai"
import styles from "./Modal.module.css"

const cx = classNames.bind(styles)

function Modal({ header, children, setShowModal }) {
	return (
		<div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
			<div className={cx("wrapper")}>
				<h3 className={cx("header-modal")}>{header}</h3>
				{children}
				<span className={cx("close-modal")} onClick={setShowModal}>
					<AiOutlineClose />
				</span>
			</div>
		</div>
	)
}

export default Modal
