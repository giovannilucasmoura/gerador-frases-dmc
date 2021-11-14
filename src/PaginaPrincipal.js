import styled from 'styled-components';
import fundo from './assets/fundo.png';
import Card from './Card'
import Personagem from './Personagem'

var autor = "Dante";
var frase = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Cras porttitor
a nisi at maximus. Donec porta erat et ipsum
placerat semper. Donec finibus posuere turpis
nec dapibus. In hac habitasse platea dictumst.
Vestibulum at faucibus odio, quis mollis metus.
Donec accumsan consectetur libero, et vestibulum
elit tempus sit amet. Aenean sed lacinia nulla.
Nulla vitae consectetur lectus. In hac habitasse
platea dictumst.`;

function PaginaPrincipal() {
    return(
        <Content>
            <ContainerMensagem>
                <Card frase={frase} autor={autor}/>
                <GerarQuote>Gerar nova frase</GerarQuote>
            </ContainerMensagem>
            <ContainerPersonagem>
                <Personagem nomePersonagem={autor}/>
            </ContainerPersonagem>
        </Content>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-image: url(${fundo});
    background-size: cover;
`;

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
`;

const GerarQuote = styled.button`
    margin: 2vh auto;
    font-family: Arial;
    font-size: 1.2em;
    padding: 4px;
`;
const ContainerPersonagem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export default PaginaPrincipal;
