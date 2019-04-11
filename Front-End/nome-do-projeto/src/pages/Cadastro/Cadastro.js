import React, { Component } from 'react';

import '../../common/css/flexbox.css';
import '../../common/css/main.css';
import './cadastro.css';

import Navbar from "../../components/navbar/Navbar";
import Axios from 'axios';

class Cadastro extends Component {
    constructor(){
        super();
        this.state = {
            nome:"",
            email:"",
            senha:""
        }

        this.cadastrarUsuarios = this.cadastrarUsuarios.bind(this);
        this.atualizaUsuarioNome = this.atualizaUsuarioNome.bind(this);
        this.atualizaUsuarioEmail = this.atualizaUsuarioEmail.bind(this);
        this.atualizaUsuarioSenha = this.atualizaUsuarioSenha.bind(this);

    }
        
        atualizaUsuarioNome(event){
            this.setState({nome : event.target.value})
        }

        atualizaUsuarioEmail(event){
            this.setState({email : event.target.value})
        }

        atualizaUsuarioSenha(event){
            this.setState({senha : event.target.value})
        }


        cadastrarUsuarios(event){
            event.preventDefault();

            Axios.post("http://localhost:5000/api/Usuario",{
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            })
            .then(data => {
                if(data.status === 200){
                    console.log(data);
                }
            })
            .catch(erro => {console.log(erro)})
        }

    render() {
        return (

            <div>
                <Navbar />

                <main className="main-cadastro">
                    <div className="container-formulario">
                        <div className="titulo-formulario">
                            <h2>Você tem direito a...</h2>
                            <h2>todos os desejos que quiser!</h2>
                        </div>
                        <h3>Cadastre-se e comece já a sua lista de desejos</h3>
                        <form className="formulario" onSubmit={this.cadastrarUsuarios}>
                            <div className="item-formulario">
                                <p>Nome</p>
                                <input type="text" value={this.state.nome} onChange={this.atualizaUsuarioNome}/>
                            </div>
                            <div className="item-formulario">
                                <p>Email</p>
                                <input type="text" value={this.state.email} onChange={this.atualizaUsuarioEmail}/>
                            </div>
                            <div className="item-formulario">
                                <p>Senha</p>
                                <input type="password" value={this.state.senha} onChange={this.atualizaUsuarioSenha}/>
                            </div>
                            <div className="item-formulario-btn">
                                <button>
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

    export default Cadastro;