import {useEffect, useRef, useState} from "react";
import "./styles.css";
import {MyButton} from "../../components/myButton/MyButton";
import {MyTextInput} from "../../components/myTextInput/MyTextInput";
import {useNavigate} from "react-router-dom";
import brasao from "../../assets/brasao.png";
import {verifyLoginForm} from "../../utils/utils";
import {getVoterByCpf} from "../../services/apiService";

export function Login() {
    const navigate = useNavigate();
    const [nomeDoEleitor, setNomeDoEleitor] = useState("");
    const [cpfDoEleitor, setCpfDoEleitor] = useState("");
    const [erro, setErro] = useState("");
    const confirmaAudio = new Audio(require("../../assets/inter.mp3"))
    const erroAudio = new Audio(require("../../assets/ops.mp3"))

    useEffect(() => {
        const resposta = verifyLoginForm(nomeDoEleitor, cpfDoEleitor);
        setErro(resposta);
    }, [nomeDoEleitor, cpfDoEleitor]);

    function handleOnChangeNome(event) {
        setNomeDoEleitor(event.target.value);
    }

    function handleOnChangeCPF(event) {
        const rawValue = event.target.value.replace(/\D/g, "");
        const formattedValue = formatCPF(rawValue);
        setCpfDoEleitor(formattedValue);
    }

    function formatCPF(cpf) {
        if (!cpf) return cpf;
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    async function acessarUrna() {
        const res = verifyLoginForm(nomeDoEleitor, cpfDoEleitor);
        if (res !== true) return
        await getVoterByCpf(cpfDoEleitor).then(async () => {
            await confirmaAudio.play();
            navigate(`/urna?nome=${encodeURIComponent(nomeDoEleitor)}&cpf=${encodeURIComponent(cpfDoEleitor)}`);
        }).catch((error) => {
            erroAudio.play();
            alert(error.response.data.error)
        })
    }

    return (
        <div id={"login-container"}>
            <div id={"login-content"}>
                <img src={brasao} alt={"brasao"}/>
                <h1 id={"login-title"}>Urna eletrônica</h1>
                <div id={"login-form"}>
                    <MyTextInput
                        placeholder={"Nome"}
                        value={nomeDoEleitor}
                        onChange={handleOnChangeNome}
                    />
                    <MyTextInput
                        placeholder={"Cpf"}
                        value={cpfDoEleitor}
                        onChange={handleOnChangeCPF}
                        max={11}
                    />
                    <MyButton value={"Entrar"} onClick={acessarUrna}/>
                    {erro && <p id={"erro"}>{erro}</p>}
                </div>
            </div>
        </div>
    );
}
