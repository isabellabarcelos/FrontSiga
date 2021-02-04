import React from 'react';
import './styles.css';
import Grid from '../Grid/index';
import List from '../List/index';

function Main({name, course, period, level, credits}){
    return(
        <div className =  "main">
            <h3> Visualização de inscrição em disciplinas</h3>
           <div className = "princ">
                <div className = "main-header">
                    <div>
                        <h3 id ="into">Visualização de inscrição em disciplinas</h3>
                        <h4 className = "disc">{name}</h4>
                        <h4 className = "disc">Curso: {course}</h4>
                    </div>
                    <div>
                    <h4 className = "disc">Curso: {period} período</h4>
                    <h4 className = "disc">Nível: {level}</h4>
                </div>
                    
            </div>
            <div>
                <h4 className = "disc" id = "credit"> Créditos: {credits}</h4>
            </div>
         </div>
            <div className = "main-container">
                <Grid
                Seg1 = " "
                Seg2 = " "
                Seg3 = " "
                Seg4 = "ALG PROG"
                Seg5 = " "
                Ter1 = "Intro ECA"
                Ter2 = " "
                Ter3 = " "
                Ter4 = "Química EE"
                Ter5 = " " 
                Qua1 = " "
                Qua2 = " "
                Qua3 = " "
                Qua4 = "ALG PROG"
                Qua5 = " " 
                Qui1 = " "
                Qui2 =  " "
                Qui3 = " "
                Qui4 = "Química EE"
                Qui5 = " "
                Sex1 = " "
                Sex2 = " "
                Sex3 = " "
                Sex4 = "ALG PROG"
                Sex5 = " "
                />
                <List class1 = "Indrodução à Engenharia de Controle e Automação" 
                      time1 = "Ter - 8:00 às 10:00"
                      class2 = "Algoritmos e Programação"
                      time2 = "Seg, Quar, Sex - 13:00 às 15:00" 
                      class3 = "Química EE" 
                      time3 = "Ter, Qui - 13:00 às 15:00"/> 
            </div>

        </div>

    )
}

export default Main;