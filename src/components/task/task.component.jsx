import React from 'react';
import './task.styles.scss'

const List=({tasks,searchField,removeItem})=>{

    return  <div className='list'>
             <table className='display'>
                  <tbody>
                    { tasks.map((task,index)=>
                           task.includes(searchField)?
                           <tr key={index}>
                            
                             <td className='number'># {index +1}</td>
                              <td className='name'>{task}</td>
                               <td onClick={
                              ()=>removeItem(index)
                            } className='remove'> X </td>
                            
                           </tr>
                             :
                    <tr key={index}></tr>)}
                  </tbody>
                 
           
                  
                          
                  
    
    </table>
  </div>

}

export default List;
