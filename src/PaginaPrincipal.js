import styled from 'styled-components';
import imagem from './assets/DMC5_Dante.webp';

function PaginaPrincipal() {
    return(
        <Content>
            <Mensagem>
                <span>Texto</span>
                    <button>Botão</button>
            </Mensagem>
            <Personagem>
                <img src={imagem} alt="Dante"></img>
            </Personagem>
        </Content>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const Mensagem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 50px;
    width: 50%;
    margin: auto 0;

    span {
        text-align: center;
    }

    button {
        font-size: 30px;
        height: 10vh;
        width: 50%;
        margin: 0 auto;
    }
`;

const Personagem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    img {
        height: 100vh;
        object-fit: cover;
        object-position: 0 -20%;
        width: 30vw;
    }
`;

export default PaginaPrincipal;
