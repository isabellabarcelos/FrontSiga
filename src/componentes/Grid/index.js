import React from 'react';
import './styles.css';


export default function Grid({Seg1,Seg2,Seg3,Seg4,Seg5,Ter1,Ter2,Ter3,Ter4,Ter5, Qua1,Qua2,Qua3,Qua4,Qua5, Qui1,Qui2,Qui3,Qui4,Qui5, Sex1, Sex2, Sex3, Sex4, Sex5})
{
    return (
        <div className = 'grid-container'>
            <div className= 'grid-days'>SEG</div>
            <div className= 'grid-days'>TER</div>
            <div className= 'grid-days'>QUA</div>
            <div className= 'grid-days'>QUI</div>
            <div className= 'grid-days'>SEX</div>
            <div className ='grid-none' >{Seg1}</div>
            <div id = "intro" className ='grid-none'>{Ter1}</div>
            <div className ='grid-none'>{Qua1}</div>
            <div className ='grid-none'>{Qui1}</div>
            <div className ='grid-none'>{Sex1}</div>
            <div className ='grid-none' >{Seg2}</div>
            <div className ='grid-none'>{Ter2}</div>
            <div className ='grid-none'>{Qua2}</div>
            <div className ='grid-none'>{Qui2}</div>
            <div className ='grid-none'>{Sex2}</div>
            <div className ='grid-none' >{Seg3}</div>
            <div className ='grid-none'>{Ter3}</div>
            <div className ='grid-none'>{Qua3}</div>
            <div className ='grid-none'>{Qui3}</div>
            <div className ='grid-none'>{Sex3}</div>
            <div id = "alg" className ='grid-none' >{Seg4}</div>
            <div id = "qui"className ='grid-none'>{Ter4}</div>
            <div id = "alg" className ='grid-none'>{Qua4}</div>
            <div id = "qui"className ='grid-none'>{Qui4}</div>
            <div id = "alg" className ='grid-none'>{Sex4}</div>
            <div  className ='grid-none' >{Seg5}</div>
            <div className ='grid-none'>{Ter5}</div>
            <div className ='grid-none'>{Qua5}</div>
            <div className ='grid-none'>{Qui5}</div>
            <div className ='grid-none'>{Sex5}</div>
        </div>

    )

}