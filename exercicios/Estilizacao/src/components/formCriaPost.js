import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const FormCadastro = styled.div `
display:flex;
flex-direction: column;
width: 50vh;
`;


export class FormDePosts extends React.Component {
    constructor(){
        super();
        this.state = {
           listaDePosts: [{
           valueFotoUser: '',
           valueNome:'',
           valueUrl:''
        }]
    }
}

adicionarItem = () => {
    console.log(this.state.valueFotoUser)
    console.log(this.state.valueNome)
    console.log(this.state.valueUrl)

    const novoPost ={
        imgUsuario: this.state.valueFotoUser,
        nomr: this.state.valueNome,
        foto:this.state.valueUrl
        }
        
        const copiarlistaDePosts =[...this.state.listaDePosts]
        
        copiarlistaDePosts.push (novoPost) //ou  const copiarlistaDePosts =[...this.state.listaDePosts, novoPost]
        
        this.setState ({
            listaDePosts: copiarlistaDePosts,
            valueFotoUser: '',
            valueNome:'',
            valueUrl:''
        })
          

}
receberValoresftuser = (event) => {
    this.setState({ valueFotoUser: event.target.value})
}

receberValoresNome = (event) => {
    this.setState({ valueNome: event.target.value})
}

receberValoresFoto = (event) => {
    this.setState({ valueUrl: event.target.value})
}

render () {
    const listaDePosts = this.state.listaDePosts.map((item) => {
        return// <li>{item.valueFotoUser}</li>
    })
    return (
        <FormCadastro>
            <input type="text" placeholder="fotoUser" value={this.state.valueFotoUser}
            onChange={this.receberValoresftuser} 
            />
            <input type="text"  placeholder="nome" value={this.state.valueNome} 
             onChange={this.receberValoresNome} 
            />
            <input type="text" placeholder="url" value={this.state.valueUrl}  
            onChange={this.receberValoresFoto}
            />
            <button onClick={this.adicionarItem}>Enviar</button>
        {listaDePosts}
        </FormCadastro>
    )
} 
}