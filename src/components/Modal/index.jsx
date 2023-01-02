/**
 * Display a modale
 * @return { HTMLElement }
 */

import './modal.css';
import { Link } from 'react-router-dom'

  function Modal({text, modalOn, setModalOn}) {
    if(modalOn){
        return (
            <div  className="modal-background">
                <div id="confirmation" className="modal">
                    <Link to="/"  className="close-modal" onClick={(e) => setModalOn(false)}>X</Link>
                    <span>{text}</span>
                </div>
            </div>
        );
    }
 }
 
 export default Modal;