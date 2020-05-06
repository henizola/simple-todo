import React from 'react';
import './App.css';
import Todo from   './components/todo/todo.component'
import Header from './components/header/header.component';
function App() {
  return (
    <div className="App">
      <div className='header'>
           <Header/>
      </div>
    <div className='todo'>
         <Todo/>
    </div>
 
    </div>
  );
}

export default App;
