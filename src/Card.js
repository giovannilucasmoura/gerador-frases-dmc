import styled from 'styled-components';

function Card(props) {
    return(
        <CardDiv>
            <Frase>{props.frase}</Frase>
            <NomeAutor>- {props.autor}</NomeAutor>
        </CardDiv>
    );
};

const Frase = styled.div`
    color: white;
    text-align: center;
    font-size: 1.1em;
    font-family: Times New Roman;
`;

const NomeAutor = styled.div`
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 2em;
    font-family: Trebuchet MS;
`;

const CardDiv = styled.div`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(120, 120, 120, 0.8));
    border-left: 2px groove lightgray;
    border-right: 2px groove lightgray;
    border-radius: 15px;
    padding: 10px;
    margin: 0 5%;
`;

export default Card;
