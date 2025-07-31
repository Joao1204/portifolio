import React, { useEffect, useState } from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import certificatePesCientifica4 from '../../resources/images/certificates/Certificado-Pesquisa-Científica-Desconexão-4-horas.png';
import certificatePesCientifica8 from '../../resources/images/certificates/Certificado-Pesquisa-Científica-Desconexão-8-horas.png';
import certificateRecepcaoAlunos from '../../resources/images/certificates/Certificado-Recepção-dos-Alunos-6-horas-.png';
import certificateRepresentante5 from '../../resources/images/certificates/Certificado-Representante-5-horas.png';
import certificateRepresentante10 from '../../resources/images/certificates/Certificado-Representante-10-horas.png';
import certificateRepresentanteSegundoSem from '../../resources/images/certificates/Certificado-Representante-segundo-semestre-2024-10-horas.png';
import certificateTemasTransversais from '../../resources/images/certificates/Certificado-Temas-Transversais.png';
import certificateTipoGramatica1 from '../../resources/images/certificates/Certificado-Tipos-de-Gramática-situação-de-comunicação-e-novo-acordo-ortográfico_1.png';
import certificateTipoGramatica from '../../resources/images/certificates/Certificado-Tipos-de-Gramática-situação-de-comunicação-e-novo-acordo-ortográfico.png';
import certificateTrilhaConectar from '../../resources/images/certificates/Certificado-Trilha-Conectar-Discover.png';
import certificateAmbientacao from '../../resources/images/certificates/Certificado-Ambientação-1.png';
import certificateClassesGramaticais from '../../resources/images/certificates/Certificado-Classes-Gramaticais-1.png';
import certificateFepro from '../../resources/images/certificates/Certificado-Fepro-5horas.png';
import certificatePalestraContech from '../../resources/images/certificates/Certificado-Palestra-Contech-3horas.png';
import certificateAtestadoCoachit from '../../resources/images/certificates/Atestado-Coachit-1.png';
import diplomaADS1 from '../../resources/images/certificates/Diploma-ADS-1.png';
import diplomaADS2 from '../../resources/images/certificates/Diploma-ADS-2.png';
import certificateDeclaracaoConclusaoGraduacaoADS from '../../resources/images/certificates/Certificado-Declaração-Conclusão-Graduação-ADS.png';
import estagio1 from '../../resources/images/certificates/TermoAditivo-Assinado-Estagio-1.png';
import estagio2 from '../../resources/images/certificates/TermoAditivo-Assinado-Estagio-2.png';

import imageFundoCertificates from '../../resources/images/certificates/img-fundo-body.jpg';

import './CertificatesScreen.css';

export default function CertificatesScreen() {
  
  //   useEffect(()=>{
  //     console.log('entrou no certificates')
  // }, [])

    return (
        <section id="main-certificate--container">
            <div>
                <img className='img-fundo--certificates' src={imageFundoCertificates} alt='Imagem de Fundo'></img>
            </div>
        <div>
            {/* {console.log('entrou no certificado screen')} */}
                
                
            {/*------------------------Formação Acadêmica - Graduação---------------------*/}
            <h1 className="main-title -complementaryActivities">&lsaquo;Formação Acadêmica - Graduação&rsaquo;</h1>
                
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">    
                <div>
                    <div className='certificates-container'>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3><br/>
                                {/* <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a> */}
                            </div>
                                {/* <span className="-certificate--span">CEUNSP</span> */}
                            <div className="certificates-autenticCode--container">
                                {/* <span className="certificates-autenticCode--span">Código de Autenticidade: </span>
                                <span className="certificates-autenticCode--span">1149.1149.ed39c9eaeffe</span> */}
                            </div>
                        </div>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={diplomaADS1}></img>
                        </div>
                    </div>
                </div>
            </article>
                
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className='certificates-container'>
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={diplomaADS2}></img>
                        </div>
                    </div>
                </div>
            </article>
            <hr />

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className='certificates-container'>
                        <div className="projects-title--container -certificateTitleContainer">
                            <div>
                                <h3 className="projects-title -certificate--title">Certificado de Conclusão Graduação ADS</h3><br/>
                                {/* <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a> */}
                            </div>
                        </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateDeclaracaoConclusaoGraduacaoADS}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr />
                
            {/*---------------------------------ESTÁGIO---------------------------------*/}
            <h1 className="main-title -complementaryActivities">&lsaquo;Estágio&rsaquo;</h1>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className='certificates-container'>
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Termo Aditivo Estágio</h3><br/>
                            {/* <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a> */}
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={estagio1}></img>
                    </div>
                    </div>        
                </div>
            </article>
                
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                    <div className='certificates-container'>   
                        <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                            <img src={estagio2}></img>
                        </div>
                    </div>         
                </div>
            </article>
            <hr />
                
            {/*---------------------------------ATIVIDADES COMPLEMENTARES---------------------------------*/}
            <h1 className="main-title -complementaryActivities">&lsaquo;Atividades Complementares para Superior ADS&rsaquo;</h1>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                    <div>
                    <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Pesquisa Científica</h3><br/>
                            {/* <a href="https://www.ev.org.br/validar-certificado" target="_blank"><i><BsFillFolderSymlinkFill /></i></a> */}
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificatePesCientifica4}></img>
                    </div>
                    </div>     
                </div>
            </article>
            <hr />
                
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Pesquisa Científica</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificatePesCientifica8}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>
            
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Recepção dos Alunos</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateRecepcaoAlunos}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Representante</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateRepresentante5}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr />
                
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Representante</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateRepresentante10}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Representante Segundo Semestre</h3>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateRepresentanteSegundoSem}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Temas Transversais</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateTemasTransversais}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Gramática</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateTipoGramatica1}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Gramática</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateTipoGramatica}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Trilha Conectar</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateTrilhaConectar}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>
          
            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Ambientação</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateAmbientacao}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado de Classes Gramaticais</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateClassesGramaticais}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado da Fepro - Feira de Profissões</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateFepro}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Certificado da Palestra Contech</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificatePalestraContech}></img>
                    </div>
                    </div>
                </div>
            </article>
            <hr/>

            <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                <div>
                <div className='certificates-container'> 
                    <div className="projects-title--container -certificateTitleContainer">
                        <div>
                            <h3 className="projects-title -certificate--title">Visita Técnica na Coach IT</h3><br/>
                        </div>
                        
                    </div>
                    <div className="bolsaEnsinoImageWrapper -maxHeigthNone">
                        <img src={certificateAtestadoCoachit}></img>
                    </div>
                    </div>
                </div>
            </article>

        </div>
    </section>
    )
};
