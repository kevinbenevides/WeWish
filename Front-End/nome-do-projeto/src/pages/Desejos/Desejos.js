import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';

import Axios from 'axios';

class Desejos extends Component{
    

    constructor(){
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();

        var str_data = dia + '/' + mes + '/' + ano
        super();
        this.state = {
            Lista : [],
            desejos : "",
            datacriacao : str_data
        }

        this.atualizaStateNome = this.atualizaStateNome.bind(this);
    }

    atualizaStateNome(event){
        this.setState({desejos : event.target.value})
    }

    cadastraDesejo(event){
        event.preventDefault();

        Axios.post("http://localhost:5000/api/Desejo",{
            descricao : this.state.desejos,
            datacriacao : this.state.datacriacao

        })

        .then(data => {
            if(data.status === 200){
              console.log(data);
            }else{
                alert('Email ou senha inválido')
              }
            })
            .catch(erro => {
              console.log(erro);
              this.setState({ erroMensegem : 'Email ou senha inválidos'})
            })
    }

    render(){
        return(
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
                        placeholder="Desejo..."/>
                        
                        <button>
                            Cadastrar
                        </button>

                    </form>
                </div>

        )
    }
}

export default Desejos;