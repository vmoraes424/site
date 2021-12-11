import React, {} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
</style>


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer email='vmoraes424@gmail.com'/>
  </React.StrictMode>,
  document.getElementById('root')
);

