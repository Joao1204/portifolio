import React from 'react';
import joaoKirche from '../../resources/images/home/joaoKirche.jpg';
import joaoKircheMobile from '../../resources/images/home/joaoKircheMobile.jpg';
import imageFundoBody from '../../resources/images/home/Design sem nome (1).png';

import './HomeScreen.css';

export default function HomeScreen() {

    return (
    <div className="main-header--container">
        <div className='main-body--img'> 
             <img className='img-fundo--body' src={imageFundoBody} alt='Imagem de Fundo'></img>
        </div>
        <div className="main-header--left">
            <h1>Desenvolvedor Web</h1>
            <h1>&lsaquo;Front-end&rsaquo;</h1>
            <br></br>
            <h1 className="--home-especializando">&lsaquo;Iniciando na Programação&rsaquo;</h1>
            <br></br>
            <h1 className="--home-rubrica">J.R Kirche F.</h1>
        </div>
        <div className='main-header--right'>
            <div class="moldura-um">
                <div class="moldura-dois">
                    <img className="--perfil-InDesktop" src={joaoKirche} alt="Amostra AuauMiau NoFamework"></img>
                    <img className="--perfil-InMobile" src={joaoKircheMobile} alt="Amostra AuauMiau NoFamework"></img>
                </div>
            </div>
        </div>
    </div>
    )
};