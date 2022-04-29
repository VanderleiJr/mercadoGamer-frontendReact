import signup from '../../styles/company/signup.module.css';

import React, {Component} from "react";
import axios from 'axios';

export default class SignUpCompany extends Component {

    constructor(){
        super()
        this.state = {name:'', cnpj:'', email:'', description:'', password:''}
    }

    nameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    cnpjChange = event => {
        this.setState({
            cnpj: event.target.value
        });
    }

    emailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    descriptionChange = event => {
        this.setState({
            description: event.target.value
        });
    }

    passwordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    signup_company = async event => {
        event.preventDefault()

        try {
            await axios.post('http://127.0.0.1:8000/company/signup', {
                name: this.state.name,
                cnpj: this.state.cnpj,
                email: this.state.email,
                description: this.state.description,
                password: this.state.password
            })
            alert(`Empresa cadastrada com sucesso! Bem-vindos!`)
            window.location.href = '/company/signin'
        } catch(e) {
            if(e.message.includes('409')) {
                alert('CNPJ já cadastrado...')
            } 
        }
    }

    render(){
        return (
            <div className={signup.pagina}>
                <div className={signup.form}>
                    <div className={signup.login}>
                        <div className={signup.cabecalho}>
                            <h3>Cadastro de Empresa</h3>
                        </div>
                    </div>

                    <form id="form_signup_company" onSubmit={this.signup_company}>
                        <label>CNPJ da Empresa</label><br/>
                        <input type="number" id="cnpj" placeholder="12345678000109" onChange={this.cnpjChange} required/><br/><br/>
                        <label>Nome da Empresa</label><br/>
                        <input type="text" id="name" placeholder="Nome da empresa" onChange={this.nameChange} required/><br/><br/>
                        <label>Email</label><br/>
                        <input type="email" id="email" placeholder="email@email.com" onChange={this.emailChange} required/><br/><br/>
                        <label>Senha</label><br/>
                        <input type="password" id="password" placeholder="Senha" onChange={this.passwordChange} required/><br/><br/>
                        <label>Breve descrição da Empresa</label><br/>
                        <textarea id="description" rows="10" cols="34" placeholder="Insira uma descrição para sua empresa" onChange={this.descriptionChange}></textarea><br/><br/>
                        <input id={signup.btn} type="submit" value="Cadastrar"/>
                    </form>
                    <br/>
                    <form action="/">
                        <input id={signup.btn} type="submit" value="Voltar ao início"/>
                    </form>
                </div>
            </div>
        )
    }
}