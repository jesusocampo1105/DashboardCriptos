import React from 'react';
import './Header.css';
import { useTheme } from './Context/ThemeProvider';

export default function Header({currencys, fun, cur}){
  const {theme, toggleTheme} = useTheme();
  
  let bo = document.getElementsByTagName('body')[0];

  function fondo(a){
    if(a == 'light'){
      bo.style.backgroundColor = '#f00';     
    }else{
      bo.style.backgroundColor = '#000';
      bo.classList.add('modo-dark')
    }
    
  }

  return (
    <header className='app-header'>
      <p>Crypto Stadistics</p>
      <div className='select-button'>
      <select value={cur} name="coinSelect" id="coinSelect" onChange={_ => {fun(document.getElementById("coinSelect").value)}}>
        {currencys.map((item, index) => <option value={item} key={index} >{item}</option>)}  
      </select>
      <button className='toogleMode' onClick={fondo(toggleTheme)}>
        {theme.img}
      </button>
      </div>
    </header>
  )
}