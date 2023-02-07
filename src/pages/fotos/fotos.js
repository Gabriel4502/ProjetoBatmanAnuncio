import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import '../fotos/styles.css'
function Fotos (){
    return (
        <div>
            <Header/>
            <div className="area-fotos">

        <nav className="nav-fotos" >
           <div className="fotos-content">
                <div className="imagem fotos1">
                    Robert Pattison
                </div>

                <div className="imagem fotos2">
                    Zoe Kravitz
                </div>

                <div className="imagem fotos3">
                    Jeffrey Wright
                </div>
                <div className="imagem fotos4">
                    teste
                </div>

                <div className="imagem fotos5">
                    Teste2
                </div>

                <div className="imagem fotos6">
                    teste3
                </div>

                <div className="imagem fotos7">
                    teste4
                </div>

                <div className="imagem fotos8">
                    teste5
                </div>

                <div className="imagem fotos9">
                    teste6
                </div>
           </div>

        </nav>
    </div>
        <Footer/>
        </div>
    )
}

export default Fotos