import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../../common/css/flexbox.css';
import '../../common/css/main.css';
import './desejos.css';

import Axios from 'axios';

class Desejos extends Component {


    constructor() {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var hora = data.getHours();

        var str_data = dia + '/' + mes + '/' + ano;
        super();
        this.state = {
            Lista: [],
            desejos: "",
            datacriacao: str_data
        }

        this.cadastraDesejo = this.cadastraDesejo.bind(this);
        this.atualizaStateNome = this.atualizaStateNome.bind(this);
    }

    
    buscaDesejo(event) {
        // fetch("http://localhost:5000/api/Desejo")
        // .then(resposta => resposta.json())
        // .then(data => this.setState({Lista : data}))
        // .catch((erro) => console.log(erro))
        var bearer = 'Bearer ' + localStorage.getItem("usuario-WeWish");

        Axios.get(
            "http://localhost:5000/Desejo/ExibirMeusDesejos",
            {headers: {'Authorization': bearer}}
          )
          .then((response) => {
              response = this.setState({Lista : response.data})
            })         
          .catch(erro => {
                console.log(erro);
            })
    }

    componentDidMount(){
        this.buscaDesejo();
    }

    atualizaStateNome(event) {
        this.setState({ desejos: event.target.value })
    }

    cadastraDesejo(event) {
        event.preventDefault();

        var bearer = 'Bearer ' + localStorage.getItem("usuario-WeWish");
        
        Axios.post("http://localhost:5000/api/Desejo", {
            descricao: this.state.desejos,
            datacriacao: this.state.datacriacao

        }, {headers: {'Authorization': bearer}})

            .then(data => {
                if (data.status === 200) {
                    console.log(data);

                } else {
                    alert('Email ou senha inválido')
                }
            })
            .catch(erro => {
                console.log(erro);
                this.setState({ erroMensegem: 'Email ou senha inválidos' })
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <section className="section-form">
        
                    <h1>Desejos</h1>
                    <h2>Bem vindo aos seus Desejos</h2>
                    <form onSubmit={this.cadastraDesejo}>
                        <h3>Qual o seu Desejo?</h3>
                        <input
                            className="Caixa-desejos"
                            type="text"
                            value={this.state.desejos}
                            onChange={this.atualizaStateNome}
                            placeholder="Desejo..." />

                        <button>
                            Cadastrar
                            </button>

                    </form>
                </section>



                <section>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Desejo</th>
                                    <th>Data Criacao</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.Lista.map(function (desejos) {
                                        return (
                                            <tr key={desejos.id}>
                                                <td>{desejos.id}</td>
                                                <td>{desejos.descricao}</td>
                                                <td>{desejos.datacriacao}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

        )
    }
}

export default Desejos;