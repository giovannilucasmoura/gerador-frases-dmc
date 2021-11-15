import styled from 'styled-components';
import fundo from './assets/fundo.png';
import { useState } from 'react';
import Card from './Card'
import Personagem from './Personagem'
import frases from './frases';

function PaginaPrincipal() {
    let fraseInicial = selecionarFraseAleatoria();
    const [frase, setFrase] = useState(fraseInicial.frase);
    const [autor, setAutor] = useState(fraseInicial.autor);

    function useGerarFrase() {
        let fraseGerada = selecionarFraseAleatoria();

        setAutor(fraseGerada.autor);
        setFrase(fraseGerada.frase);
    };

    return(
        <Content>
            <ContainerMensagem>
                <Card frase={frase} autor={autor}/>
                <GerarFrase onClick={useGerarFrase}>Gerar nova frase</GerarFrase>
            </ContainerMensagem>
            <ContainerPersonagem>
                <Personagem nomePersonagem={autor}/>
            </ContainerPersonagem>
        </Content>
    );
};

function selecionarFraseAleatoria(){
    return frases[Math.floor(Math.random() * frases.length)];
}

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-image: url(${fundo});
    background-size: cover;

    @media only screen and (hover: none) and (pointer: coarse){
        flex-direction: column;
        background-size: cover;
        background-position: center;
    }
`;

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;

    @media only screen and (hover: none) and (pointer: coarse){
        width: 100%;
        margin: 20px 0;
        height: 25%;
    }
`;

const GerarFrase = styled.button`
    margin: 2vh auto;
    font-family: Arial;
    font-size: 1.2em;
    color: white;
    background-color: rgba(20, 20, 20, 0.8);
    border: none;
    border-radius: 10px;
    padding: 6px;

    &:hover {
        background-color: red;
        transition: background-color 0.3s;
    }

    &:active {
        background-color: darkred;
        transition: background-color 0.1s;
    }

    @media only screen and (hover: none) and (pointer: coarse){
        border: 1px solid gray;

        &:active {
            background-color: darkred;
            transition: background-color 0s;
        }
    }
`;

const ContainerPersonagem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media only screen and (hover: none) and (pointer: coarse){
        width: 100%;
        height: 75%;
    }
`;

export default PaginaPrincipal;
