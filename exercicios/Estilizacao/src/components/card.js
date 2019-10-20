import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {FormDePosts} from './formCriaPost.js'

const Bigcard  = styled.div `
    border-color: grey;
    border-style: solid;
    border-width: 1px;
    display:flex;
    flex-direction: column;
    width: 50vh;
    margin-left: 75vh;
`;

const ImgUser = styled.img`
border-radius: 50%;
width: 6vh;
margin-right:5px;
height: 8vh;
padding: 5px;
`
const FotoPrincipal = styled.div`
margin-right: 7.5vh;
width: 50vh;
`
const Likes = styled.div`
display: flex;
justify-content:space-between;
width: 49vh;
padding:5px;
`

const User = styled.div`
display:flex;
width: 50vh;
align-items: center;
border-bottom: 0;
`
const Teste = styled.div `
    margin-left: 75vh;
    padding-bottom: 10px;
`

export function InstaF4(props){
return (
    <div>
        <Teste>
            <FormDePosts>
                <div></div>
            </FormDePosts>
        </Teste>

        <Bigcard>
            <User>
                <ImgUser src={props.imagemUser} alt="" />
                <p>{props.userName}</p>
            </User>
            <FotoPrincipal>
                <img src = {props.fotoPrincipal} alt="" />
            </FotoPrincipal>
            <Likes>
                <img src = {props.likeIcon} alt="" className="likewhite" onClick={props.curtida} />
                <p>{props.numeracaoCurtida }</p>
                <img src = {props.commentIcon} alt="" className="iconeComentario" onClick={props.mostrarComentario}/>
                <p>{props.numeracaoComentario}</p>
            </Likes>
        </Bigcard>  
    </div>
    )
}

InstaF4.propTypes = {
    imagemUser: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    fotoPrincipal: PropTypes.string.isRequired,
    likeIcon: PropTypes.string.isRequired,
    commentIcon: PropTypes.string.isRequired,
    curtida:PropTypes.func.isRequired,
    mostrarComentario:PropTypes.func.isRequired,
    numerador:PropTypes.string.isRequired,
    numeracaoComentario:PropTypes.string.isRequired,
    numeracaoCurtida:PropTypes.string.isRequired,
 

  }
     