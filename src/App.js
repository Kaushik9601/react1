import React from "react";
import './App.css';
import ReactDOM from 'react-dom';

function App(){
  
  const element=   (
    <div id="root">
     
      <p>
        I am learning React. My life is getting better.
        </p>
     
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}


export default App;
