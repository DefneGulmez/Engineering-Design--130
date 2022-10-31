import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import React, {Component} from "react";
import './popup.css'

export class Popup extends component {
    
}



function Popup(props) {
    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup-inner"> 
                <button className="close-btn">close</button>
                {props.children}

            </div>

        </div>
    ) : '' ;
} 


export default Popup