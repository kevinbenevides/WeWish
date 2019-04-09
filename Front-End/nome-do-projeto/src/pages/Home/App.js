import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Axios from 'axios';
class App extends Component {
  constructor(){
    super();
    this.state = {
      email : '',
      senha : ''
    }
  }

  atualizaStateEmail(event){
    this.setState({email : event.target.value});
  }

  atualizaStateSenha(event){
    this.setState({senha : event.target.value});
  }

  efetuaLogin(event){
    event.preventDefault();
    
    Axios.post("http://localhost:5000/api/Login",{
      email: this.state.email,
      senha: this.state.senha
    })

    .then(data => {
      if(data.status === 200){
        console.log(data);
        localStorage.setItem("usuario-WeWish", data.data.token);
        this.props.history.push("/desejos");
      }else{
        alert('Email ou senha inválido')
      }
    })
    .catch(erro => {
      console.log(erro);
      this.setState({ erroMensegem : 'Email ou senha inválidos'})
    })
  }

  render() {
    return (
      <section className="container flex">
                <div className="img__login"><div className="img__overlay"></div></div>

                <div className="item__login">
                    <div className="row">
                        <div className="item">
                            {/* <img src={logo} className="icone__login" /> */}
                        </div>
                        <div className="item" id="item__title">
                            <p className="text__login" id="item__description">
                                Bem-vindo! Faça login para acessar sua conta.
                            </p>
                        </div>
                        <form onSubmit={this.efetuaLogin.bind(this)}>
                            <div className="item">
                                <input
                                    className="input__login"
                                    placeholder="username"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.atualizaStateEmail.bind(this)}
                                    name="username"
                                    id="login__email"
                                />
                            </div>
                            <div className="item">
                                <input
                                    className="input__login"
                                    placeholder="password"
                                    type="password"
                                    value={this.state.senha}
                                    onChange={this.atualizaStateSenha.bind(this)}
                                    name="password"
                                    id="login__password"
                                />
                            </div>
                            <p className="text__login" style={{color : 'red', textAlign : 'center'}}>{this.state.erroMensegem}</p>
                            <div className="item">
                                
                            <button type="submit" className="btn btn__login" id="btn__login">
                                        Login
                            </button>
            </div>
          </form>
        </div>
                    </div>
    </section>
    );
  }
}

export default App;
