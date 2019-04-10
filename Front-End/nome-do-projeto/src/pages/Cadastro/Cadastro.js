import React, { Component } from 'react';

import '../../common/css/flexbox.css';
import '../../common/css/main.css';
import './cadastro.css';

import Navbar from "../../components/navbar/Navbar";

class Cadastro extends Component {
    
    render() {
        return (

            <div>
                <Navbar />

                <main className="main-cadastro">
                    <div className="container-formulario">
                        <h2>Você tem direito a...</h2>
                        <h2>todos os desejos que quiser!</h2>
                        <h3>Cadastre-se e comece já a sua lista de desejos</h3>
                        <form className="formulário">
                            <div className="item-formulario">
                                <p>Nome</p>
                                <input type="text"/>
                            </div>
                            <div className="item-formulario">
                                <p>Email</p>
                                <input type="text"/>
                            </div>
                            <div className="item-formulario">
                                <p>Senha</p>
                                <input type="password"/>
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