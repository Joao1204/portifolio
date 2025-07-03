import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import './SkillsScreen.css';

import imageFundoSkills from '../../resources/images/skills/img-fundo.png';

//CONTAINER 1
import conversation_logo_icon from '../../resources/images/skills/conversation.png';
import persuasion_logo_icon from '../../resources/images/skills/persuasion.png';
import teamwork_logo_icon from '../../resources/images/skills/teamwork.png';
import troubleshooting_logo_icon from '../../resources/images/skills/troubleshooting.png'
import adaptability_logo_icon from '../../resources/images/skills/adaptability.png';
import leadership_logo_icon from '../../resources/images/skills/leadership.png';
import criticalThinking_logo_icon from '../../resources/images/skills/critical-thinking.png';
import organizationAndPlanning_logo_icon from '../../resources/images/skills/organization-and-planning.png';
import creativityAndInnovation_logo_icon from '../../resources/images/skills/creativity-and-innovation.png';
import proactivity_logo_icon from '../../resources/images/skills/proactivity.png';
import target_logo_icon from '../../resources/images/skills/target.png';

//CONTAINER 2
import javaScript_logo_icon from '../../resources/images/skills/javaScript.png';
import html5_logo_icon from '../../resources/images/skills/html5.png';
import hashtagCss_logo_icon from '../../resources/images/skills/hashtagCss.png';
import react_logo_icon from '../../resources/images/skills/react.png';
import salesman_logo_icon from '../../resources/images/skills/salesman.png';
import english_logo_icon from '../../resources/images/skills/english.png';
import spanish_logo_icon from '../../resources/images/skills/spanish.png';

export default function SkillsScreen() {
    return (
    <section id="main-skills--container">
        <div className='main-body--img'> 
            <img className='img-fundo--body---skills' src={imageFundoSkills} alt='Imagem de Fundo'></img>
        </div>
        <div>
            <h1 className="main-title">&lsaquo;Habilidades&rsaquo;</h1>
            <div className="wrapper-skills">
                <article className="skill-tec">
                    <img className="icon" src={conversation_logo_icon} alt="Logo de Comunicação" ></img>
                    <div className="right">
                        <h3 className="title-skill">Comunicação</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Clareza na comunicação verbal e escrita.</span>
                        {/* <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/1igYf5NuYs8VA5A58EslDKrK9sUr2FHGQ?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span> */}
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={persuasion_logo_icon} alt="Logo de Persuasão" ></img>
                    <div className="right">
                        <h3 className="title-skill">Persuasão</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">❤️</span>
                    </div>
                </article>                                                                 
                <article className="skill-tec">
                    <img className="icon" src={teamwork_logo_icon} alt="Logo de Teamwork" ></img>
                    <div className="right">
                        <h3 className="title-skill">Trabalho em Equipe</h3>
                        <progress className="progress-bar --skills" max="100" value="100">100%</progress>
                        <span className="-fav">Capacidade de colaborar e atingir metas em grupo.</span>
                    </div>
                </article>                 
                <article className="skill-tec">
                    <img className="icon" src={troubleshooting_logo_icon} alt="Logo de Troubleshooting" ></img>
                    <div className="right">
                        <h3 className="title-skill">Resolução de Problemas</h3>
                        <progress className="progress-bar --skills" max="100" value="100">100%</progress>
                        <span className="-fav">Identificação e solução de problemas.</span>
                    </div>
                </article>                   
                <article className="skill-tec">
                    <img className="icon" src={adaptability_logo_icon} alt="Logo de Adaptability" ></img>
                    <div className="right">
                        <h3 className="title-skill">Adaptabilidade</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Flexibilidade diante de mudanças.</span>
                    </div>
                </article>                   
                <article className="skill-tec">
                    <img className="icon" src={leadership_logo_icon} alt="Logo de Leadership" ></img>
                    <div className="right">
                        <h3 className="title-skill">Liderança</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Habilidade de motivar e guiar equipes, assumir responsabilidades e tomar decisões.</span>
                    </div>
                </article>                  
                <article className="skill-tec">
                    <img className="icon" src={criticalThinking_logo_icon} alt="Logo de Critical Thinking" ></img>
                    <div className="right">
                        <h3 className="title-skill">Pensamento Crítico</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Analisar informações, questionar suposições e tomar decisões embasadas.</span>
                    </div>
                </article>              
                <article className="skill-tec">
                    <img className="icon" src={organizationAndPlanning_logo_icon} alt="Logo de Organization And Planning" ></img>
                    <div className="right">
                        <h3 className="title-skill">Organização e Planejam.</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Gerenciar tarefas, prazos e recursos de forma eficiente.</span>
                    </div>
                </article>                  
                <article className="skill-tec">
                    <img className="icon" src={creativityAndInnovation_logo_icon} alt="Logo de Creativity And Innovation"></img>
                    <div className="right">
                        <h3 className="title-skill">Criatividade e Inovação</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Gerar ideias originais e encontrar soluções inovadoras para problemas.</span>
                    </div>
                </article>           
                <article className="skill-tec">
                    <img className="icon" src={proactivity_logo_icon} alt="Logo de Proactivity"></img>
                    <div className="right">
                        <h3 className="title-skill">Proatividade</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Antecipar-se a problemas e tomar ações preventivas.</span>
                    </div>
                </article>          
                <article className="skill-tec">
                    <img className="icon" src={target_logo_icon} alt="Logo de Target"></img>
                    <div className="right">
                        <h3 className="title-skill">Foco em Resultados</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">Definir metas e trabalhar para alcançá-las, mantendo o foco nos resultados esperados.</span>
                    </div>
                </article>
            </div>

            {/* Container 2*/}
            <h1 className="main-title --linguagens_e_habilidades_tecnicas_skills">&lsaquo;Linguagens e Habilidades Técnicas&rsaquo;</h1>
            <div className="wrapper-skills">              
                {/* <article className="skill-tec">
                    <img className="icon" src={java_core_date_time_API_legacy_logo_icon} alt="Logo do Date-Time API - Legacy" ></img>
                    <div className="right">
                        <h3 className="title-skill">Date-Time API Legacy</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/dateTimeAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>   */}   
                <article className="skill-tec">
                    <img className="icon" src={javaScript_logo_icon} alt="Logo de JavaScript" ></img>
                    <div className="right">
                        <h3 className="title-skill">JavaScript</h3>
                        <progress className="progress-bar --skills" max="100" value="10">10%</progress>
                        <span className="-fav">Iniciando❤️</span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={html5_logo_icon} alt="Logo de HTML 5" ></img>
                    <div className="right">
                        <h3 className="title-skill">HTML 5</h3>
                        <progress className="progress-bar --skills" max="100" value="20">20%</progress>
                        <span className="-fav">Iniciando❤️</span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={hashtagCss_logo_icon} alt="Logo de Css" ></img>
                    <div className="right">
                        <h3 className="title-skill">CSS</h3>
                        <progress className="progress-bar --skills" max="100" value="10">10%</progress>
                        <span className="-fav">Iniciando❤️</span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={react_logo_icon} alt="Logo de React.js" ></img>
                    <div className="right">
                        <h3 className="title-skill">React.js</h3>
                        <progress className="progress-bar --skills" max="100" value="10">10%</progress>
                        <span className="-fav">Iniciando❤️</span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={salesman_logo_icon} alt="Logo do Vendas" ></img>
                    <div className="right">
                        <h3 className="title-skill">Vendas</h3>
                        <progress className="progress-bar --skills" max="100" value="100">100%</progress>
                        <span className="-fav">❤️</span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={english_logo_icon} alt="Logo de Edioma Inglês EUA" ></img>
                    <div className="right">
                        <h3 className="title-skill">Inglês EUA</h3>
                        <progress className="progress-bar --skills" max="100" value="10">10%</progress>
                        <span className="-fav">Básico ❤️</span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={spanish_logo_icon} alt="Logo de Edioma Espanhol" ></img>
                    <div className="right">
                        <h3 className="title-skill">Espanhol</h3>
                        <progress className="progress-bar --skills" max="100" value="10">10%</progress>
                        <span className="-fav">Básico ❤️</span>
                    </div>
                </article>
            </div>
        </div>
    </section>
    )
};
