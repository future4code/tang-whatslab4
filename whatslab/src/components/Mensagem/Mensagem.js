import React from 'react'
import styled from 'styled-components'

const DivMensagem = styled.div `
    display:flex;
`

export default class Mensagem extends React.Component {
    render() {
        return (
            <DivMensagem onClick={this.props.apagar}>
           <p><b>{this.props.usuario} </b> {this.props.mensagem}</p> 
            </DivMensagem>
        )
    }
}

