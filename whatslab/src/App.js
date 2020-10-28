import React from 'react'
import styled from 'styled-components';
import Formulario from "./components/Formulario/Formulario.js";
import Mensagem from "./components/Mensagem/Mensagem.js"
import MensagemEu from "./components/MensagemEu/MensagemEu.js"

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
                       mensagem: "teste",
                       id:1
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
      usuario: this.state.valorUsuario + ":",
      mensagem: this.state.valorMensagem,
      id: Date.now()
    };

    const atualizaArrayMensagens = [novaMensagem, ...this.state.arrayMensagens];

    this.setState({
      arrayMensagens: atualizaArrayMensagens,
      valorMensagem: ""
    })
  }

  funcaoEnter = (event) => {
    if (event.code === "Enter") {
      this.aoEnviar()
    }
  }


  apagarMensagem = (mensagem) => {
    const atualizaArrayMensagens = this.state.arrayMensagens.filter((elemento) => {
     if(mensagem !== elemento.id) {
       return mensagem
     } else if (mensagem === elemento.id) {
        elemento.usuario = ""; 
        elemento.mensagem = "Esta mensagem foi apagada.";
        return mensagem
     }

    })

    this.setState({arrayMensagens: atualizaArrayMensagens})
  }

  render() {
    

    const listaDeMensagens = this.state.arrayMensagens.map((elemento,index) => {
      if (elemento.usuario === "Eu:") {
        console.log("eu")
        return (
          <MensagemEu
            key={elemento.id}
            usuario={""}
            mensagem={elemento.mensagem}
            apagar={() => this.apagarMensagem(elemento.id)}
            ></MensagemEu>
        )
      } else {
      return(
          <Mensagem
          key={elemento.id}
          usuario={elemento.usuario}
          mensagem={elemento.mensagem}
          apagar={() => this.apagarMensagem(elemento.id)}
          ></Mensagem>
        );
      }
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
            apertouEnter={this.funcaoEnter}
            />
            {listaDeMensagens}
          </AppDiv>
          
        </DivMae>
    )
  }
}

export default App;
