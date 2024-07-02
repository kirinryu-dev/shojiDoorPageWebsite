


// import custom css 
import './Modal.css';


const Modal = ({isOpen , onClose , content }) => {
    if(!isOpen) return null



    return (
        <div className='modal'>
            <div className='modal_content'>
                <span className='modal_content_closebtn'
                onClick={onClose}
                >
                    <p>
                        {content}
                    </p>
                </span>
            </div>
        </div>
    );
};

export default Modal;