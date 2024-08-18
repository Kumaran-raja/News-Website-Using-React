import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'; // Adjust the import path as needed

function Run() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<Run />, document.getElementById('root')); // Ensure you have a div with id 'root' in your HTML
