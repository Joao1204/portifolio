import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import './SkillsScreen.css';

// import spring_framework_logo_icon from '../../resources/images/skills/spring_framework_icon.png';
import conversation_logo_icon from '../../resources/images/skills/conversation.png';
import salesman_logo_icon from '../../resources/images/skills/salesman.png';
import persuasion_logo_icon from '../../resources/images/skills/persuasion.png';
import javaScript_logo_icon from '../../resources/images/skills/javaScript.png';
import html5_logo_icon from '../../resources/images/skills/html5.png';
import hashtagCss_logo_icon from '../../resources/images/skills/hashtagCss.png';
import react_logo_icon from '../../resources/images/skills/react.png';

// import java_core_exception_and_error_handling_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Exception_and_Error_Handling.webp';
// import java_core_wrapper_of_primitive_type_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Wrapper_of_Primitive_Type.png';
// import java_core_strings_constants_pool_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Strings_Constants_Pool.png';
// import java_core_date_time_API_legacy_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Date-Time_API_Legacy.png'; 
// import java_core_date_time_API_joda_time_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Date-Time_API _Joda-Time.png';
// import java_core_internationalization_polymorphism_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Internationalization_Polymorphism.png';
// import java_core_regex_regular_expression_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Regex_Regular_Expression.png';
// import java_core_io_API_legacy_file_and_dir_operations_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_IO_API_Legacy_File_and_Dir_Operations.png';
// import java_core_io_API_new_file_and_dir_operations_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_IO_API_New_File_and_Dir_Operations_Safe.png';
// import java_core_io_serialization_and_deserialization_API_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Serialization_and_Deserialization_API.png'
// import java_core_data_structures_low_level_implementation_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Data_Structures_Low_Level_Implementation.png';
// import java_core_collections_API_data_structures_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Collections_API_Data_Structures.png'
// import java_core_generics_type_replaces_object_context_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Generics_Type_Replaces_Object_Context.png'; 
// import java_core_inner_class_four_types_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_boneca_chinesa_inside.png';
// import java_core_functional_programming_lambdas_anonymous_functions_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Functional_Programming_Lambdas_Anonymous_Functions.png';
// import java_core_functional_programming_method_reference_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Functional_Programming_Method_Reference.png';
// import java_core_optional_class_null_pointer_handling_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Optional_Class_Null_Pointer_Handling.png';
// import java_core_streams_API_simplifying_data_processing_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Streams_API_Simplifying_Data_Processing.png';
// import java_core_threads_low_level_operations_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Threads_Low_Level_Operations.png';
// import java_core_multithreading_synchronization_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Multithreading_Synchronization.png';
// import java_core_multithreading_concurrency_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Multithreading_Concurrency.png';
// import java_core_concurrent_API_Concurrency_Handling_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Concurrent_API_Concurrency_Handling.png';
// import java_core_design_patterns_gang_of_four_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_Design_Patterns_Gang_of_Four_GoF.png';
// import java_core_JDBC_API_database_driver_and_connector_logo_icon from '../../resources/images/skills/java_core_logo_icons/Java_Core_JDBC_API_Database_Driver_and_Connector.png';

export default function SkillsScreen() {
    return (
    <section id="main-skills--container">
        <div>
            <h1 className="main-title">&lsaquo;Habilidades&rsaquo;</h1>
            <div className="wrapper-skills">
                <article className="skill-tec">
                    <img className="icon" src={conversation_logo_icon} alt="Logo de Comunicação" ></img>
                    <div className="right">
                        <h3 className="title-skill">Comunicação</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">😎</span>
                        {/* <span><a className="-linkBoldYellow" href="https://drive.google.com/drive/folders/1igYf5NuYs8VA5A58EslDKrK9sUr2FHGQ?usp=sharing" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span> */}
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
                    <img className="icon" src={persuasion_logo_icon} alt="Logo de Persuasão" ></img>
                    <div className="right">
                        <h3 className="title-skill">Persuasão</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span className="-fav">❤️</span>
                    </div>
                    </article>

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
            </div>

            {/* Container 2*/}
            <h1 className="main-title --java_core_skills">&lsaquo;Java Core&rsaquo;</h1>
            <div className="wrapper-skills">
                
                {/* <article className="skill-tec">
                    <img className="icon" src={java_core_date_time_API_legacy_logo_icon} alt="Logo do Date-Time API - Legacy" ></img>
                    <div className="right">
                        <h3 className="title-skill">Date-Time API Legacy</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/dateTimeAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_date_time_API_joda_time_logo_icon} alt="Logo do Date-Time API - Joda-Time" ></img>
                    <div className="right">
                        <h3 className="title-skill">Date-Time API New</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/dateTimeAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_internationalization_polymorphism_logo_icon} alt="Logo do Internationalization - Polymorphism" ></img>
                    <div className="right">
                        <h3 className="title-skill">Internationalization</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/internationalization" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_regex_regular_expression_logo_icon} alt="Logo do Regex - Regular Expression" ></img>
                    <div className="right">
                        <h3 className="title-skill">Regex Regular Exp.</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/regexOrRegexp" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_io_API_legacy_file_and_dir_operations_logo_icon} alt="Logo do IO API Legacy - File and Dir Operations" ></img>
                    <div className="right">
                        <h3 className="title-skill">IO API Legacy</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/inputOutputLegacyAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_io_API_new_file_and_dir_operations_logo_icon} alt="Logo do IO API New - File and Dir Operations" ></img>
                    <div className="right">
                        <h3 className="title-skill">IO API New</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://bibleofjava.wellisonbertelli.com.br/#/newInputOutputAPI" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>  
                <article className="skill-tec">
                    <img className="icon" src={java_core_io_serialization_and_deserialization_API_logo_icon} alt="Logo do Serialization and Deserialization API" ></img>
                    <div className="right">
                        <h3 className="title-skill">IO Serialization API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/H_serializacao" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_data_structures_low_level_implementation_logo_icon} alt="Logo do Data Structures - Low-Level Implementation" ></img>
                    <div className="right">
                        <h3 className="title-skill">Data Structures Impl.</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/ZA_estruturaDados" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_collections_API_data_structures_logo_icon} alt="Logo do Collections API - Data Structures" ></img>
                    <div className="right">
                        <h3 className="title-skill">Collections API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/I_collections" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>    
                <article className="skill-tec">
                    <img className="icon" src={java_core_generics_type_replaces_object_context_logo_icon} alt="Logo do Generics Type - Replaces Object Context" ></img>
                    <div className="right">
                        <h3 className="title-skill">Generics Type</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/J_generics" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={java_core_inner_class_four_types_logo_icon} alt="Logo do Inner Class - Four Types" ></img>
                    <div className="right">
                        <h3 className="title-skill">Inner Class Four Type</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/K_classesInternas" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>     
                <article className="skill-tec">
                    <img className="icon" src={java_core_functional_programming_lambdas_anonymous_functions_logo_icon} alt="Logo do Func. Prog. Lambdas - Anonymous Functions" ></img>
                    <div className="right">
                        <h3 className="title-skill">Lambda Functions</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/M_lambdas" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> 
                <article className="skill-tec">
                    <img className="icon" src={java_core_functional_programming_method_reference_logo_icon} alt="Logo do Func. Prog. Method Reference" ></img>
                    <div className="right">
                        <h3 className="title-skill">Method Reference</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/N_methodReference" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>   
                <article className="skill-tec">
                    <img className="icon" src={java_core_optional_class_null_pointer_handling_logo_icon} alt="Logo do Optional Class - Null Pointer Handling" ></img>
                    <div className="right">
                        <h3 className="title-skill">Optional Class</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/O_optional" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>   
                <article className="skill-tec">
                    <img className="icon" src={java_core_streams_API_simplifying_data_processing_logo_icon} alt="Logo do Streams API - Simplifying Data Processing" ></img>
                    <div className="right">
                        <h3 className="title-skill">Streams API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/P_streams" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_threads_low_level_operations_logo_icon} alt="Logo do Threads - Low-Level Operations" ></img>
                    <div className="right">
                        <h3 className="title-skill">Thread Low-Level</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/Q_threads" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_multithreading_synchronization_logo_icon} alt="Logo do Multithreading - Synchronization" ></img>
                    <div className="right">
                        <h3 className="title-skill">Thread Synchronization</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/Q_threads/sincronismo" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_multithreading_concurrency_logo_icon} alt="Logo do Multithreading - Concurrency" ></img>
                    <div className="right">
                        <h3 className="title-skill">Thread Concurrency</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/R_concurrent" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_concurrent_API_Concurrency_Handling_logo_icon} alt="Logo do Concurrent API - Concurrency Handling" ></img>
                    <div className="right">
                        <h3 className="title-skill">Concurrent API</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/R_concurrent" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_design_patterns_gang_of_four_logo_icon} alt="Logo do Design Patterns - Gang Of Four (GoF)" ></img>
                    <div className="right">
                        <h3 className="title-skill">Design Patterns GoF</h3>
                        <progress className="progress-bar --skills" max="100" value="70">70%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/S_designPatterns" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article>
                <article className="skill-tec">
                    <img className="icon" src={java_core_JDBC_API_database_driver_and_connector_logo_icon} alt="Logo do JDBC API - Database Driver and Connector" ></img>
                    <div className="right">
                        <h3 className="title-skill">JDBC DB Connection</h3>
                        <progress className="progress-bar --skills" max="100" value="90">90%</progress>
                        <span><a className="-linkBoldYellow" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/T_jdbc" target="_blank">Repo. de Estudos <i><BsFillFolderSymlinkFill /></i></a></span>
                    </div>
                </article> */}
            </div>
        </div>
    </section>
    )
};
