import React from "react";
import Modal from 'react-modal';



const OptionModal = (props) =>(
    <Modal
    isOpen ={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.deleteSelectedOption}
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__paragraph">{props.selectedOption}</p>}
    <button onClick={props.deleteSelectedOption} className="modal__button">okay</button>
    </Modal>
    );

    export default OptionModal;