import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { FaHome, FaBars, FaUserFriends } from 'react-icons/fa'
import { BiLeftArrow, BiPhoneCall } from 'react-icons/bi'
import { useStateValue } from '../StateProvider';


const Nav = styled.div`
    position: fixed;
    height: -webkit-fill-available;
    background-color: #090b13;
    color: #fff;
    width: ${({ isOpen }) => isOpen ? '300px' : '50px'};
  
    @media (max-width: 768px) {
      width: ${({isOpen}) => isOpen ? '50px' : '300px'};
    }

    ul {
      list-style-type: none;
    }

    ul li {
      border: 1px solid;
      margin: 10px;
      border-radius: 5px;
    }
    
    a {
      text-decoration: none;
      display: flex;
      padding: ${({isOpen}) => isOpen ? '10px' : '5px'};
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      align-items: center;
      
      @media (max-width: 768px) {
        padding: ${({isOpen}) => isOpen ? '5px' : '10px'};
      }
      
      span {
        padding-left: 10px;
        display: ${({isOpen}) => isOpen ? 'block' : 'none'};
        
        @media (max-width: 768px) {
          display: ${({isOpen}) => isOpen ? 'none' : 'block'};
        }
      }

      &:hover {
        color: #090b13;
        background-color: #fff;
      }
    }
    .active {
      color: #090b13;
      background-color: #fff;
    }
  `;

  const Burger = styled.div`
    display: flex;
    justify-content: ${({isOpen}) => isOpen ? 'end' : 'center'};
    cursor: pointer;
    
    @media (max-width: 768px) {
      justify-content: ${({isOpen}) => isOpen ? 'center' : 'end'};
    }

    svg {
      font-size: 18px;
      padding: 10px;
      color: #fff;
    }
  `;


const Sidebar = () => {

  const [{ isOpen }, dispatch] = useStateValue();

  return (
      <Nav isOpen={isOpen}>
        <Burger isOpen={isOpen} onClick={() => dispatch({type: 'IS_SIDEBAR_OPEN', isOpen: !isOpen})}>
          {!isOpen ? <FaBars /> : <BiLeftArrow /> }
        </Burger>
        <ul>
          <li>
            <NavLink to='/'>
              <FaHome />
              <span>home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              <FaUserFriends />
              <span>about us</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <BiPhoneCall />
              <span>contact us</span>
            </NavLink>
          </li>
        </ul>
      </Nav>
  )
}

export default Sidebar