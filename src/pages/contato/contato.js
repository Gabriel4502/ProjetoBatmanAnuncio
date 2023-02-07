import React from "react";
import Header from "../../components/header/header";
import './styles.css'
import logoEmail from'../../assets/logoEmail.png'
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
function Contato () {
    return (
        <>
            <Header/>
            
                <div id='container-principal2' >
                    <img id="banner-email" src={logoEmail}/>

                    <div id ='area-formulario2'>
                        <h1 id='titulo2'>Contato</h1>

                        <form id= 'formulario2'>
                            <label for="nome2">Nome</label>
                            <input id="nome2" type="text" name="Nome2" placeholder="Nome"/>

                            <label for="email2">E-mail</label>
                            <input id="email2" type="email" name="email2" placeholder="Coloque um email valido"/>

                            <textarea name="mensagem2" id="mensagem2" rows="10" >

                            </textarea>
                        </form>
                        <div id= 'botao'>

                        <Button nome='Enviar'/>
                        </div>
                    </div>
                </div>

                <Footer/>
            
        </>
    )
}

export default Contato;