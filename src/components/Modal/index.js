import ModalWrapper from "./ModalWrapper";

const Modal = ({ children }) => {
    return (<ModalWrapper>
        <div className="div">
            {children}
        </div>
    </ModalWrapper>)
}

export default Modal;