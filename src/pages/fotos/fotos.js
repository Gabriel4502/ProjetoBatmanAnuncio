import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import '../fotos/styles.css'
function Fotos (){
    return (
        <div id="MainContainer">
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
                    Curabitur
                </div>

                <div className="imagem fotos5">
                    Feugiat 
                </div>

                <div className="imagem fotos6">
                    Ipsum 
                </div>

                <div className="imagem fotos7">
                    Lobortis 
                </div>

                <div className="imagem fotos8">
                    Faucibus 
                </div>

                <div className="imagem fotos9">
                    Scelerisque 
                </div>
           </div>

        </nav>
    </div>
        <Footer/>
        </div>
    )
}

export default Fotos