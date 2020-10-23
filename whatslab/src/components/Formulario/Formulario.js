import React from 'react'
import styled from 'styled-components';

const DivFormulario = styled.div `
    display:flex;

`

const InputUsuario = styled.input `
    width:100px;
` 
const InputMensagem = styled.input `
    width:100%;
`
const BotaoEnviar = styled.button `

` 



export default class Formulario extends React.Component {
    render() {
        return (
            <DivFormulario>
                <InputUsuario
                placeholder="Usuario"
                value={this.props.valorUsuario}
                onChange={this.props.onChangeUsuario}
                />

                <InputMensagem
                placeholder="Mensagem"
                value={this.props.valorMensagem}
                onChange={this.props.onChangeMensagem}
                />

                <BotaoEnviar
                onClick={this.props.onClickBotao}
                >Enviar</BotaoEnviar>
            </DivFormulario>
        )
    }
}
