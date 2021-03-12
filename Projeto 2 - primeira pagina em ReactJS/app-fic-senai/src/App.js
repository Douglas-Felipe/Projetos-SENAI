import React from 'react';
import './App.css';

//importando os componentes
import Header from './Componentes/Header/';
import Footer from './Componentes/Footer/';
import Card from './Componentes/Card'
//

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card">
      <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
