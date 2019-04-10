import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';

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
            idusuario: 1,
            desejos: "",
            datacriacao: str_data
        }

        this.cadastraDesejo = this.cadastraDesejo.bind(this);
        this.atualizaStateNome = this.atualizaStateNome.bind(this);
    }

    
    buscaDesejo(event) {
        fetch("http://localhost:5000/api/Desejo")
        .then(resposta => resposta.json())
        .then(data => this.setState({Lista : data}))
        .catch((erro) => console.log(erro))
    }

    componentDidMount(){
        this.buscaDesejo();
    }

    atualizaStateNome(event) {
        this.setState({ desejos: event.target.value })
    }

    cadastraDesejo(event) {
        event.preventDefault();

        Axios.post("http://localhost:5000/api/Desejo", {
            idusuario: this.state.idusuario,
            descricao: this.state.desejos,
            datacriacao: this.state.datacriacao

        })

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
                <h1>Desejos</h1>
                <p>Bem vindo aos seus Desejos</p>
                <form onSubmit={this.cadastraDesejo}>
                    <p>Qual o seu Desejo</p>
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