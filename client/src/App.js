import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Restaurant_Finder from './Restaurant_Finder.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>            
            <script src="./main"></script>
            <script src="./socket"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
            <Restaurant_Finder />
       
      </BrowserRouter>

    );
  }
}

export default App;
