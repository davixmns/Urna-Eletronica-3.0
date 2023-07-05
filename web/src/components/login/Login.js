import {useState} from "react";
import "./styles.css"

export function Login(props){

    function handleNameChange(event){
        props.setName(event.target.value)
    }

    return (
        <div id={"tela-div"}>
            <div id={"login-info"}>
                <span id={"login-title"}>Digite seus dados</span>
                <input type={"text"} value={props.name} onChange={handleNameChange} placeholder={"NOME"} className={"login-input"}/>
                <input type={"text"} value={props.cpf} placeholder={"CPF"} className={"login-input"}/>
            </div>
        </div>
    )
}