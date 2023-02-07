import React from "react";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './styles.css'
function Comentarios (){
    return (
        <>
            <Header/>
            <div class="comentarios-container">

        <div id="formulario">

        <form id = "form-coment">
            <h3>Comentários</h3>
            <label className="nomeLabel" for="nome">Nome</label>
            <input id="nome" type="text" placeholder="Seu nome" name="nome"/>

            <label className="emailLabel" for="email">Email</label>
            <input id="email" type="email" placeholder="Seu email" name="email"/>

            <textarea id="mensagem" name="mensagem" rows="10">

            </textarea>

            <div id="botao">
                <Button nome='Enviar'/>
            </div>
        </form>
    </div>
    </div>
    <Footer/>
        </>
    )
}

export default Comentarios
