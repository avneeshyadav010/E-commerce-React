import { useState } from "react";


const Modal = (props)=> {
    const [modal, setModal] = useState(false);
    const modalToggle = ()=> {
        setModal(!modal);
        console.log(modal)
    }
    if(modal){
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }
    return(
        <>
        <button className="btn-modal" onClick={modalToggle}>View Image</button>
        {modal && ( <div className="modal">
            <div onClick={modalToggle} className="overlay">
                <div className="modal-content">
                    <h2>{props.imgTitle}</h2>
                    <img src={props.srcProps} alt="Image"></img>
              <button className="close-modal" onClick={modalToggle}>
              CLOSE
            </button>
                </div>
            </div>
         </div>)}
        </>
    )
}

export default Modal;