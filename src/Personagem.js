import styled from 'styled-components';
import ImgDante from './assets/DMC5_Dante.webp';
import ImgNero from './assets/DMC5_Nero.webp';
import ImgVergil from './assets/DMC5_Vergil.webp';
import { string } from 'prop-types';

function Personagem(props) {
    if(props.nomePersonagem === 'Dante'){
        return <Dante />
    } else if(props.nomePersonagem === 'Nero'){
        return <Nero />
    } else if(props.nomePersonagem === 'Vergil'){
        return <Vergil />
    } else {
        return <></>
    }
};

Personagem.propTypes = {
    nomePersonagem: string
};

const DivPersonagem = styled.div`
    height: 100vh;
    object-fit: cover;
`;

const Dante = styled(DivPersonagem)`
    content: url(${ImgDante});
    object-position: 0 -20%;
    width: 30vw;
`;

const Nero = styled(DivPersonagem)`
    content: url(${ImgNero});
    object-position: 0 5%;
    width: 30vw;
`;

const Vergil = styled(DivPersonagem)`
    content: url(${ImgVergil});
    object-position: 0 10%;
    margin-left: -7%;
    width: 34vw;
`;

export default Personagem;
