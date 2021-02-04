import React from 'react';
import './styles.css';

export default function List({class1, time1, class2, time2, class3, time3}){
            return(
                <div className = "list">
                   
                       <ul>
                            <li>{class1}</li>
                            <li>{time1}</li>
                            <li>{class2}</li>
                            <li>{time2}</li>
                            <li>{class3}</li>
                            <li>{time3}</li>
                            
                        </ul>    
                
                </div>
            )

}