import React, { } from 'react';
import './App.css';

interface AppProps {
  email: string
}

export default function App(props: AppProps) {

  return (
    <div className="App">
      <header>
        <div className='menu'>
          <div className='logo'>Vini</div>
          <div className='botao'>
            <div className='linha-menu'></div>
            <div className='linha-menu'></div>
            <div className='linha-menu'></div>
          </div>
        </div>
        <div className='linha'></div>
      </header>
      <div className='container'>
        <div className='imagem'></div>
        <div className='profissao'>React Developer Jr</div>
        <div className='nome'>Vinícius Moraes</div>
        <div className='btns'>
          <a href="#.com">Me contrate</a>
          <a href="#.com">Saiba mais</a>
        </div>
      </div>
    </div>
  );
}
