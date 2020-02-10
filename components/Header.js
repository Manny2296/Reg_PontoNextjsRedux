import "./Header.scss";
import { scaleRotate as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCreditCard, faShoppingBag, faCubes, faMoneyCheckAlt, faMoneyBillAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const style = {
  background: 'linear-gradient(45deg, #66bb6a 30%, #a5d6a7 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};
import React, { Component } from 'react';


class Header extends Component {
    constructor(props){
      super(props)
    
    }
  render() {

    return (
      <div className="Header">
        
       
       <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}  customBurgerIcon={ <img src={require('./image/menu1.png')}/> } >
       <h4  className="bm-Headermenu"><FontAwesomeIcon icon={faCubes}/> MF.RegistroPonto</h4>
        <a id="home" className="menu-item" href="/"><FontAwesomeIcon icon={faHome}/>  Home</a>
        <a id="usuarios" className="menu-item" href="/usuarios"><FontAwesomeIcon icon={faUser}/> Usuarios Log</a>
       

     {/*<a id="prestamos" className="bm-item menu-item" href='/prestamos'><FontAwesomeIcon icon={faCreditCard}/> Prestamos</a>*/}
       
      </Menu>
      <h3 className="title" >
      <FontAwesomeIcon icon={faCubes}/> MF.Registro de Ponto 
      </h3>
    
    </div>
    );
  }
}

export default Header;
