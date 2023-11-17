import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment'
import Button from './components/button/button';
import Home from './pages/home';
import { NovoContext } from './contexts/novoContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Header from './components/header/header';
import Detalhes from './pages/detalhes/detalhes';
import Comentarios from './pages/comentarios/comentarios';

function App() {

  // const callBack = useCallback(() =>{
  //   console.log('Qualquer coisa')
  // }, [])

  

  // const valorMemorizado = useMemo(() =>{
  //   return "Qualquer coisa"
  // })
  // const {valor, setValor} = useContext(NovoContext);
  // const video = useRef();
  // const [categoria, setCategoria] = useState();
  // const [carregando, setCarregando] = useState(true)
  // const [Cor, setCor] = useState('white');
  // const [cores, setCores] = useState(false)
  // let contador = 0;
  // useEffect(() =>{
  //     console.log(`Alterou cor para ${Cor}`)

  //   contador++;
  // }, [Cor])

  //   useEffect(() =>{
  //       alert(`Valor foi alterado ${valor}`)
  //   }, [valor])

  

        return (
          <>
          <BrowserRouter>
            <Routes>
              <Route path='/ProjetoBatmanAnuncio' element={<Home/>} />
              <Route path='/contato' element={<Contato/>} />
              <Route path='/fotos' element={<Fotos/>} />
              <Route path='/comentarios' element={<Comentarios/>} />
              <Route path='/detalhes/:id' element={<Detalhes/>} />
            </Routes>
          </BrowserRouter>
            
            {/* <Button nome="botao" style={ cores ? {'background-color': `${Cor}`} : {'background-color' : 'white'} } ></Button> */}
            {/* <Button nome="Botao" style={ {'background-color': `${Cor}` } } ></Button>
            <Button nome="Azul" onClick={() =>{ setCor('blue') } } ></Button>
            <Button nome="Vermelho" onClick={() =>{ setCor('red') }} ></Button>
            <Button nome="Verde" onClick={() =>{ setCor('green') }} ></Button>
            <Button nome="Branco" onClick={() =>{ setCor('white') }} ></Button>
            <Button nome="Altera Contexto" onClick={() =>{ setValor(!valor) }} ></Button> */}
            {/* <video  ref={video} ></video>
            <table border='1' style={{border: 'double'} }>
              <thead>
                <tr>
              <th>Modelo</th>
              <th>Categoria</th>
              <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {}
              </tbody>
            </table> */}
          </>
        );
}

export default App;
