import React from 'react';
import './form.styles.scss'


const Form=({addItem})=>{
    let item=''
     
    const handleSubmit=event=>{
        event.preventDefault();
        addItem(item);
    }
    function adding(event){
           item=event.target.value;
    }
    
    return  <form onSubmit={handleSubmit}>
                     <input type='text' placeholder='insert here' onChange={adding} required/>
                    <button  className='submit' type='submit' value='reset'>Add Item</button>
              </form>
                 
            
           
}

export default Form;