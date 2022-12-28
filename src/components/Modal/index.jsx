/**
 * Display a modale
 * @return { HTMLElement }
 */

// import './modal.css';

  function Modal(text) {

    return (
        <main>
        <div className="modale">
            <span>X</span>
            <span>{text}</span>
        </div>
        </main>
    );
 }
 
 export default Modal;