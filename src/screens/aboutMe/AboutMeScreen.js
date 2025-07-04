import React from 'react';

import { TbCodePlus, TbArrowsMaximize, TbArrowsDiagonalMinimize2 } from 'react-icons/tb';
import { BiSearchAlt } from 'react-icons/bi';
import { GiHamburger } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import './AboutMeScreen.css';

import imageFundoAboutMe from '../../resources/images/aboutMe/imagemIA.jpg';

export default function AboutMeScreen() {

    return (
    <section id="main-sobre--container">
        <div className='main-body--img'> 
            <img className='img-fundo--body---aboutMe' src={imageFundoAboutMe} alt='Imagem de Fundo'></img>
        </div>
        <div>
            <h1 className="main-title">&lsaquo;Sobre Mim&rsaquo;</h1>
            <div>
                <div className='main-sobre--shellContainer'>
                    <div className="main-sobre--shellHead">
                        <i><TbCodePlus /></i>
                        <span><h3>root@mascarado:/home/joaokirche/aboutMe</h3></span>
                        <div>
                            <i><BiSearchAlt /></i>
                            <i><GiHamburger /></i>
                        </div>
                        <div className="main-sobre--shellHeadWindowCommomIcons">
                            <i><TbArrowsDiagonalMinimize2 /></i>
                            <i><TbArrowsMaximize /></i>
                            <i><AiOutlineClose /></i>
                        </div>

                    </div>
                    <p>
                    <span className="main-sobre--shellUser">root@mascarado</span>:<span className="main-sobre--shellDir">/home/joaokirche/aboutMe</span># \ <br/>&rsaquo;
                    <br/><br/>
                    <span className="main-sobre--shellDir">ADENDO</span><br/><br/>
                    Sou uma pessoa comprometida, adaptável e movida por propósito. Valorizo a organização, a comunicação clara e o trabalho em equipe como pilares para alcançar bons resultados.<br/><br/>

                    Gosto de aprender continuamente, enfrentar desafios com criatividade e contribuir ativamente para soluções que façam sentido e tenham impacto. Acredito na colaboração, no respeito às ideias e na melhoria constante como caminhos para a evolução.<br/><br/>

                    <span className="main-sobre--shellDir">CONVICÇÕES</span><br/><br/>

                    Acredito que o comprometimento com a qualidade, o respeito pelas pessoas e a vontade de evoluir são fundamentais em qualquer jornada.<br/><br/>
                    
                    Tenho convicção de que grandes resultados vêm do trabalho consistente, da escuta ativa e da troca verdadeira entre pessoas.<br/><br/>

                    Valorizo a ética, a responsabilidade e a clareza nas relações, e defendo que aprendizado contínuo e colaboração são essenciais para construir soluções que realmente fazem a diferença.<br/><br/>

                    <span className="main-sobre--shellDir">HOBBIES</span><br/><br/>

                    Nos meus momentos livres, gosto de manter o equilíbrio entre movimento e conexão.<br/><br/>
                    
                    Praticar esportes e musculação me ajudam a manter o corpo ativo e a mente leve.<br/><br/>
                    
                    Valorizo o tempo com os amigos, a convivência com minha namorada e também os momentos comigo mesmo, onde posso refletir, recarregar e evoluir.<br/><br/>

                    Estudar e trabalhar fazem parte do que me realiza — gosto de aprender coisas novas e transformar conhecimento em ação.<br/><br/>

                    Andar de moto completa essa rotina com uma dose de liberdade e aventura.<br/><br/>
                    <br></br>
                    Vamos solucionar problemas aplicando tecnologia juntos?
                    </p>
                </div>
            </div>             
        </div>
    </section>
    )
};
