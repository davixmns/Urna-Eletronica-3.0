import { useEffect, useState } from "react";
import "./styles.css";
import { MyButton } from "../../components/myButton/MyButton";
import { MyTextInput } from "../../components/myTextInput/MyTextInput";
import { useNavigate } from "react-router-dom";
import brasao from "../../assets/brasao.jpg";
import { verifyLoginForm } from "../../utils/utils";

export function Login() {
    const navigate = useNavigate();
    const [nomeDoEleitor, setNomeDoEleitor] = useState("");
    const [cpfDoEleitor, setCpfDoEleitor] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        console.log(erro)
    }, [nomeDoEleitor, cpfDoEleitor]);

    function handleOnChangeNome(event) {
        setNomeDoEleitor(event.target.value);
    }

    function handleOnChangeCPF(event) {
        setCpfDoEleitor(event.target.value);
    }

    function acessarUrna() {
        const resposta = verifyLoginForm(nomeDoEleitor, cpfDoEleitor);
        if (resposta == true) {
            navigate("/urna");
        } else {
            setErro(resposta);
        }
    }

    return (
        <div id={"login-container"}>
            <div id={"login-content"}>
                <img src={brasao} alt={"brasao"} />
                <h1 id={"login-title"}>Simulador de urna</h1>
                <div id={"login-form"}>
                    <MyTextInput
                        placeholder={"Digite seu NOME"}
                        value={nomeDoEleitor}
                        onChange={handleOnChangeNome}
                    />
                    <MyTextInput
                        placeholder={"Digite seu CPF"}
                        value={cpfDoEleitor}
                        onChange={handleOnChangeCPF}
                    />
                    <MyButton value={"Entrar"} onClick={acessarUrna} />
                    {erro && <p className="erro">{erro}</p>}
                </div>
            </div>
        </div>
    );
}