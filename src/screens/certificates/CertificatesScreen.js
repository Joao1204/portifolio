import React, { useEffect, useState } from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import certificatePesCientifica4 from '../../resources/images/certificates/Certificado-Pesquisa-Científica-Desconexão-4-horas.png';

import certificatePesCientifica8 from '../../resources/images/certificates/Certificado-Pesquisa-Científica-Desconexão-8-horas.png';

import './CertificatesScreen.css';

export default function CertificatesScreen() {
  
  //   useEffect(()=>{
  //     console.log('entrou no certificates')
  // }, [])

    return (
    <section id="main-certificate--container">
        <div>
          {console.log('entrou no certificado screen')}
            <h1 className="main-title -complementaryActivities">&lsaquo;Atividades Complementares para Superior ADS&rsaquo;</h1>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">lalalalalalla</h3>
                            <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                        </div>
                        <span className="-certificate--span">kakakakakakka</span>
                        <div className="certificates-autenticCode--container">
                            <span className="certificates-autenticCode--span">lalalalalalalalalalal </span>
                            <span className="certificates-autenticCode--span">lalalalalallalalalalala</span>
                        </div>
                        <p>lalalalalalalallalalalaalalla</p>
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificatePesCientifica4}></img>
                    </div>
                </div>
            </article>
            <hr/>
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">lalalalalalalallalalalaalalla</h3>
                            <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                        </div>
                        <span className="-certificate--span">lalalalalalalalalalal</span>
                        <div className="certificates-autenticCode--container">
                            <span className="certificates-autenticCode--span">lalalalalalalallalalalaalalla</span>
                            <span className="certificates-autenticCode--span">lalalalalalalalalalal</span>
                        </div>
                        <p>lalalalalalalallalalalaalalla</p>
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificatePesCientifica8}></img>
                    </div>
                </div>
            </article>
            <hr/>
            <hr />
            <h1 className="main-title -complementaryActivities">&lsaquo;Formação Acadêmica Nível Técnico&rsaquo;</h1>           
        </div>
    </section>
    )
};
