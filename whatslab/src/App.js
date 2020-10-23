import React from 'react'
import styled from 'styled-components';
import Formulario from "./components/Formulario/Formulario.js";
import Mensagem from "./components/Mensagem/Mensagem.js"

const DivMae = styled.div `
  display:flex;
  justify-content: center;
`
const AppDiv = styled.div `
  border: 1px solid black;
  width: 45vw;
  height: 100vh;
  display:flex;
  flex-direction: column-reverse;
`

class App extends React.Component {

  state = {
    valorUsuario: "",
    valorMensagem: "",
    arrayMensagens: [ {usuario: "David",
                       mensagem: "teste"
                       }
    ]
  }

  onChangeUsuario = (event) => {
    this.setState({
      valorUsuario: event.target.value
    })
  }

  onChangeMensagem = (event) => {
    this.setState({
      valorMensagem: event.target.value
    })
  }

  aoEnviar = () => {
    const novaMensagem = {
      usuario: this.state.valorUsuario,
      mensagem: this.state.valorMensagem
    };

    const atualizaArrayMensagens = [novaMensagem, ...this.state.arrayMensagens];

    this.setState({
      arrayMensagens: atualizaArrayMensagens,
      valorMensagem: ""
    })


  }

  render() {

    const listaDeMensagens = this.state.arrayMensagens.map((elemento,index) => {
        return(
          <Mensagem
          key={index}
          usuario={elemento.usuario}
          mensagem={elemento.mensagem}></Mensagem>
        );
    });

    return (
        <DivMae>
          <AppDiv>
            <Formulario
            valorUsuario={this.state.valorUsuario}
            onChangeUsuario={this.onChangeUsuario}
            valorMensagem={this.state.valorMensagem}
            onChangeMensagem={this.onChangeMensagem}
            onClickBotao={this.aoEnviar}
            />
            {listaDeMensagens}
          </AppDiv>
          
        </DivMae>
    )
  }
}

export default App;
