import './Modal.css';

export const Modal = ({ children }) => {

    return (
        <div className="modal">
            { children }
        </div>
    )
}