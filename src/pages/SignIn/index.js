import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/marvel.png";
import America from "../../assets/heroes/america.jpg";
import Spider from "../../assets/heroes/spider.jpg";
import Hulk from "../../assets/heroes/hulk.jpg";
import Thanos from "../../assets/heroes/thanos.jpg";
import IronMan from "../../assets/heroes/ironMan.jpg";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>

        <div>
            <img src={America} alt="america.jpg" />
            <a href="https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica">Capitão américa</a>
        </div>

        <div>
            <img src={Spider} alt="hulk.jpg" />
            <a href="https://pt.wikipedia.org/wiki/Homem-Aranha_no_cinema">Homem Aranha</a>
        </div>

        <div>
            <img src={Hulk} alt="spider.jpg" />
            <a href="https://pt.wikipedia.org/wiki/Hulk">Hulk</a>
        </div>
          
          <div>
            <img src={Thanos} alt="thanos.jpg" />
            <a href="https://pt.wikipedia.org/wiki/Thanos">Thanos</a>
          </div>
          
          <div>
            <img src={IronMan} alt="thanos.jpg" />
            <a href="https://pt.wikipedia.org/wiki/Homem_de_Ferro">Homem de Ferro</a>
          </div>
         
        
      </Container>
    );
  }
}

export default withRouter(SignIn);