import React from 'react';
import './styles.css';
import Aluno from '../Aluno/index';

export default function Header({menu, menu2, menu3, menu4, menu5, menu6, menu7}){
    return(
      <>
    <div id = "header-container">
      <div id = "header">   
          <a id = "title" href = "https://gnosys.ufrj.br/Portal/inicial?cid=62540"><h1>Portal UFRJ</h1></a>
          <div>
          <Aluno/>
          </div>
      </div>
    

   </div>
   <div id = "menu-container">
    <div id = "menu">
      <h4>{menu}</h4>
    <h4 id = "insc">{menu2}</h4>
      <h4>{menu3}</h4>
      <h4>{menu4}</h4>
      <h4>{menu5}</h4>
      <h4>{menu6}</h4>
      <h4>{menu7}</h4>
    </div>
  </div>
  </>
    );
}