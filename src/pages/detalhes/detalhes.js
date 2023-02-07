import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/header/header';

function Detalhes(){
    const params = useParams()
    console.log(params.id)
    const location = useLocation();
    console.log(location)
    useEffect(()=>{

    }, [])

    return(
        <>
        <Header/>
        <div>Detalhes</div>
        </>
    )
}

export default Detalhes;