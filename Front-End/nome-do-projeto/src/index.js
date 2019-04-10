import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './pages/Home/App';
import Desejos from './pages/Desejos/Desejos'
import Cadastro from './pages/Cadastro/Cadastro'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path ="/" component={App}/>
                <Route path="/desejos" component={Desejos}/>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
