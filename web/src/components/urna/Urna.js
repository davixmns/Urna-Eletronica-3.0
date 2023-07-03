import React, {useEffect} from 'react';
import telaImage from '../../assets/tela.jpg';
import topoImage from '../../assets/topo.jpg';
import faixaDirImage from '../../assets/faixaDir.jpg';
import ladoEsqTecImage from '../../assets/ladoEsqTec.jpg';
import n0Image from '../../assets/n0.jpg';
import n1Image from '../../assets/n1.jpg';
import n2Image from '../../assets/n2.jpg';
import n3Image from '../../assets/n3.jpg';
import n4Image from '../../assets/n4.jpg';
import n5Image from '../../assets/n5.jpg';
import n6Image from '../../assets/n6.jpg';
import n7Image from '../../assets/n7.jpg';
import n8Image from '../../assets/n8.jpg';
import n9Image from '../../assets/n9.jpg';

import n0Normal from '../../assets/n0_down.jpg';
import n1Normal from '../../assets/n1_down.jpg';
import n2Normal from '../../assets/n2_down.jpg';
import n3Normal from '../../assets/n3_down.jpg';
import n4Normal from '../../assets/n4_down.jpg';
import n5Normal from '../../assets/n5_down.jpg';
import n6Normal from '../../assets/n6_down.jpg';
import n7Normal from '../../assets/n7_down.jpg';
import n8Normal from '../../assets/n8_down.jpg';
import n9Normal from '../../assets/n9_down.jpg';
import confirmaPressionado from '../../assets/confirma_down.jpg';
import brancoPressionado from '../../assets/branco_down.jpg';
import corrigePressionado from '../../assets/corrige_down.jpg';

import ladoDirTecImage from '../../assets/ladoDirTec.jpg';
import ptabaixo7Image from '../../assets/ptabaixo7.jpg';
import confirmaImage from '../../assets/confirma.jpg';
import brancoImage from '../../assets/branco.jpg';
import corrigeImage from '../../assets/corrige.jpg';
import abaixoTecImage from '../../assets/abaixoTec.jpg';
import ptAbaixo9Image from '../../assets/ptabaixo9.jpg';
import "./styles.css";
import * as apiService from "../../services/apiService";

export function Urna() {
    const [b0, setB0] = React.useState(n0Image);
    const [b1, setB1] = React.useState(n1Image);
    const [b2, setB2] = React.useState(n2Image);
    const [b3, setB3] = React.useState(n3Image);
    const [b4, setB4] = React.useState(n4Image);
    const [b5, setB5] = React.useState(n5Image);
    const [b6, setB6] = React.useState(n6Image);
    const [b7, setB7] = React.useState(n7Image);
    const [b8, setB8] = React.useState(n8Image);
    const [b9, setB9] = React.useState(n9Image);

    const [bConfirma, setBConfirma] = React.useState(confirmaImage);
    const [bBranco, setBBranco] = React.useState(brancoImage);
    const [bCorrige, setBCorrige] = React.useState(corrigeImage);

    const [digito1, setDigito1] = React.useState(null);
    const [digito2, setDigito2] = React.useState(null);

    const [partidos, setPartidos] = React.useState([]);
    const [candidatos, setCandidatos] = React.useState([]);

    const [nomeDoCandidato, setNomeDoCandidato] = React.useState("");
    const [partidoDoCandidato, setPartidoDoCandidato] = React.useState("");

    const [votoBranco, setVotoBranco] = React.useState(false);

    const [votoNulo, setVotoNulo] = React.useState(false);

    const [numeroFoiConfirmado, setNumeroFoiConfirmado] = React.useState(false);

    useEffect(() => {
        async function fetchData() {
            const partidos = await apiService.getAllParties();
            const candidatos = await apiService.getAllCandidates();
            setPartidos(partidos);
            setCandidatos(candidatos);
        }

        fetchData()
            .then(() => {
                console.log("Dados carregados com sucesso!")
            })
            .catch(() => {
                console.log("Erro ao carregar dados!")
            });
    }, [])

    function registrarNumero(numero) {
        if (digito1 == null) {
            setDigito1(numero);
        } else if (digito2 == null) {
            setDigito2(numero);
        }
    }

    useEffect(() => {
        function identificarCandidato() {
            let flag = true;
            if (digito1 && digito2) {
                const numeroDigitado = digito1 + digito2;
                for (const candidato of candidatos) {
                    if (candidato.number == numeroDigitado) {
                        const candidato = candidatos.find(candidato => candidato.number == numeroDigitado);
                        setNomeDoCandidato(candidato.name);

                        const partido = partidos.find(partido => partido.party_id == candidato.party_id);
                        setPartidoDoCandidato(partido.acronym)
                        setNumeroFoiConfirmado(true);
                        flag = false;
                    }
                }
                if (flag) {
                    setVotoNulo(true);
                }
            }
        }

        identificarCandidato();
    }, [digito1, digito2])


    function botao0Pressionado() {
        setTimeout(() => {
            setB0(n0Image);
        }, 200)
        setB0(n0Normal);
        registrarNumero("0")
    }

    function botao1Pressionado() {
        setTimeout(() => {
            setB1(n1Image);
        }, 200)
        setB1(n1Normal);
        registrarNumero("1")
    }

    function botao2Pressionado() {
        setTimeout(() => {
            setB2(n2Image);
        }, 200)
        setB2(n2Normal);
        registrarNumero("2")
    }

    function botao3Pressionado() {
        setTimeout(() => {
            setB3(n3Image);
        }, 200)
        setB3(n3Normal);
        registrarNumero('3')
    }

    function botao4Pressionado() {
        setTimeout(() => {
            setB4(n4Image);
        }, 200)
        setB4(n4Normal);
        registrarNumero("4")
    }

    function botao5Pressionado() {
        setTimeout(() => {
            setB5(n5Image);
        }, 200)
        setB5(n5Normal);
        registrarNumero("5")
    }

    function botao6Pressionado() {
        setTimeout(() => {
            setB6(n6Image);
        }, 200)
        setB6(n6Normal);
        registrarNumero("6")
    }

    function botao7Pressionado() {
        setTimeout(() => {
            setB7(n7Image);
        }, 200)
        setB7(n7Normal);
        registrarNumero("7")
    }

    function botao8Pressionado() {
        setTimeout(() => {
            setB8(n8Image);
        }, 200)
        setB8(n8Normal);
        registrarNumero("8")
    }

    function botao9Pressionado() {
        setTimeout(() => {
            setB9(n9Image);
        }, 200)
        setB9(n9Normal);
        registrarNumero("9")
    }

    function botaoConfirmaPressionado() {
        setTimeout(() => {
            setBConfirma(confirmaImage);
        }, 200)
        setBConfirma(confirmaPressionado);
    }

    function botaoBrancoPressionado() {
        setTimeout(() => {
            setBBranco(brancoImage);
        }, 200)
        setBBranco(brancoPressionado);
        setVotoBranco(true)
    }

    function botaoCorrigePressionado() {
        setTimeout(() => {
            setBCorrige(corrigeImage);
        }, 200)
        setBCorrige(corrigePressionado);
        setDigito1(null);
        setDigito2(null);
        setNomeDoCandidato("");
        setPartidoDoCandidato("");
        setNumeroFoiConfirmado(false);
        setVotoNulo(false);
        setVotoBranco(false);
    }

    return (
        <div>
            <img id="tela" alt="tela" src={telaImage} width="451" height="423" border="0"/>
            <img id="topo" alt="topo" src={topoImage} width="192" height="183" border="0"/>
            <img id="faixaDir" alt="faixaDir" src={faixaDirImage} width="38" height="357" border="0"/>
            <img id="ladoEsqTec" alt="ladoEsqTec" src={ladoEsqTecImage} width="19" height="160" border="0"/>
            <img id="n_0" alt="n_0" src={b0} width="56" height="36" border="0" onClick={botao0Pressionado}/>
            <img id="n_1" alt="n_1" src={b1} width="51" height="41" border="0" onClick={botao1Pressionado}/>
            <img id="n_2" alt="n_2" src={b2} width="48" height="41" border="0" onClick={botao2Pressionado}/>
            <img id="n_3" alt="n_3" src={b3} width="48" height="41" border="0" onClick={botao3Pressionado}/>
            <img id="n_4" alt="n_4" src={b4} width="51" height="42" border="0" onClick={botao4Pressionado}/>
            <img id="n_5" alt="n_5" src={b5} width="48" height="42" border="0" onClick={botao5Pressionado}/>
            <img id="n_6" alt="n_6" src={b6} width="48" height="42" border="0" onClick={botao6Pressionado}/>
            <img id="n_7" alt="n_7" src={b7} width="51" height="41" border="0" onClick={botao7Pressionado}/>
            <img id="n_8" alt="n_8" src={b8} width="48" height="41" border="0" onClick={botao8Pressionado}/>
            <img id="n_9" alt="n_9" src={b9} width="48" height="41" border="0" onClick={botao9Pressionado}/>
            <img id="branco" alt="branco" src={bBranco} width="63" height="41" border="0"
                 onClick={botaoBrancoPressionado}/>
            <img id="corrige" alt="corrige" src={bCorrige} width="63" height="41" border="0"
                 onClick={botaoCorrigePressionado}/>
            <img id="confirma" alt="confirma" src={bConfirma} width="66" height="49" border="0"
                 onClick={botaoConfirmaPressionado}/>
            <img id="ladoDirTec" alt="ladoDirTec" src={ladoDirTecImage} width="26" height="152" border="0"/>
            <img id="ptabaixo7" alt="ptabaixo7" src={ptabaixo7Image} width="51" height="36" border="0"/>
            <img id="ptabaixo9" alt="ptabaixo9" src={ptAbaixo9Image} width="40" height="28" border="0"/>
            <img id="abaixoTec" alt="abaixoTec" src={abaixoTecImage} width="226" height="27" border="0"/>


            <div id={"tela-div"}>
                <h1 className={"titulo"}>Presidente</h1>

                {!votoBranco ? (
                    <div>
                        <div className={"info"}>
                            <div className={"dados"}>
                                {numeroFoiConfirmado ? (
                                    <h3 className={"info-titulo"}>Numero:</h3>
                                ) : (votoNulo ? (
                                    <h3 className={"info-titulo"}>Numero:</h3>
                                ) : null)}

                                <div className={"caixas"}>
                                    <div className={"caixa-numero"}>
                                        <h1 className={"numero"}>{digito1}</h1>
                                    </div>
                                    <div className={"caixa-numero"}>
                                        <h1 className={"numero"}>{digito2}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {numeroFoiConfirmado ? (
                            <div>
                                <div className={"dados"}>
                                    <h3 className={"info-titulo"}>Nome: {nomeDoCandidato}</h3>
                                </div>
                                <div className={"dados"}>
                                    <h3 className={"info-titulo"}>Partido: {partidoDoCandidato}</h3>
                                </div>
                            </div>
                        ) : (votoNulo ? (
                            <div>
                                <h1 className={"voto-nulo"}>VOTO NULO</h1>
                                <h3 className={"numero-errado"}>NUMERO ERRADO</h3>
                            </div>
                        ) : null)}
                    </div>
                ) : (
                    <h1 className={"voto-branco"}>VOTO EM BRANCO</h1>
                )}

            </div>
        </div>

    );
};
