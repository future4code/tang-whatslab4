import React from 'react'
import styled from 'styled-components'

const DivMensagem = styled.div `
    display:flex;
    align-self: flex-end;
    margin-right: 4px
`

export default class MensagemEu extends React.Component {
    render() {
        return (
            <DivMensagem onClick={this.props.apagar}>
                <p>{this.props.mensagem}</p> 
            </DivMensagem>
        )
    }
}

