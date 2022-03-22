import React from 'react'
import CartWidget from './CartWidget'
import { TotalCartContext } from './CartContext'
import { useContext } from 'react'

import openBook from './images/open-book.png'
import burguerMenu from './images/menu.png'

import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {

  const {cart} = useContext(TotalCartContext)

  const categories = [
    { id: 'asfadd', address: '/', text: 'Todos los Productos' },
    { id: '123asf', address: '/category/Narnia-book', text: 'Narnia' },
    { id: 'sgs3q3', address: '/category/Lotr-book', text: 'El Señor de los Anillos' },
  ];

  // BURGUER MENU ( RESPONSIVE )
 
  const openMenu = () =>{   
    document.getElementById('mobile-filter').classList.add('moveFilter');
  }

  const closeMenu = ()=>{
    document.getElementById('mobile-filter').classList.remove('moveFilter');
  }

  // NORMAL MENU

  const showCategories = ()=>{
    document.getElementById('categoriesNav').classList.add('showCategoriesNav');
    document.getElementById('closeFilterButton').classList.add('closeCategoriesButton');
    document.getElementById('filterTitleNav').classList.add('hiddenFilter');
  }

  const closeCategories = ()=>{
    document.getElementById('categoriesNav').classList.remove('showCategoriesNav');
    document.getElementById('filterTitleNav').classList.remove('closeCategoriesButton');
    document.getElementById('filterTitleNav').classList.remove('hiddenFilter');
    document.getElementById('closeFilterButton').classList.remove('closeCategoriesButton');
  }

  const showFilterButton = ()=>{
    document.getElementById('filterTitleNav').classList.remove('hiddenFilter');
    document.getElementById('closeFilterButton').classList.remove('closeCategoriesButton');
    document.getElementById('categoriesNav').classList.remove('showCategoriesNav');
  }

  return (
   <>

    <div id='categoriesNav'>

      {categories.map((cat) => {

      return(
        <div key={cat.id}>
          <NavLink to={cat.address}>
            <li className='filterNav' onClick={closeCategories}> {cat.text} </li>
          </NavLink>
        </div>
        )
      })}
    </div>

    <section className='navBar'>

      { <NavLink to='/'><h2 className='page-name' style={{cursor: 'pointer'}}> <img src={openBook} alt='logotype' className='bookImg'/> Dani's Thor</h2></NavLink> }

      <div className="ulNav">

        <p id='filterTitleNav' onClick={showCategories}></p>
        <span id='closeFilterButton' onClick={showFilterButton}></span>

        {
          cart.length > 0 ?
          <span> <Link to={'/cart-context'}> <CartWidget/> </Link> </span>
          :
          <span></span>
        }

    
        <span onClick={openMenu}>
          <img src={burguerMenu} alt='Burguer Menu' className='burguerMenu'/>
        </span>

      </div>

    </section>

    <div id='mobile-filter'>
        <h3 style={{color:'var(--details-color)', letterSpacing: '2px'}}>Filtrar:</h3>

        <span id='close-filter' onClick={closeMenu}>X</span>

      {categories.map((cat) => {

        return(
          <div key={cat.id}>
            <NavLink to={cat.address}>
              <li className='filter-mobile-nav' onClick={closeMenu}> {cat.text} </li>
            </NavLink>
          </div>
          )
        })}
    </div>
   </> 
  )
};