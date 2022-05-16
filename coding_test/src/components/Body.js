import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Sidebar from './Sidebar';
import { useStateValue } from '../StateProvider';
import Loader from './Loader';

const BodyLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    position: relative;
    top: 70px;
`;

const BodyContent = styled.div`
    position: absolute;
    left: ${({ isOpen }) => isOpen ? '300px' : '50px'};
    padding: 10px;
    padding-bottom: 70px;
    
    @media (max-width: 768px) {
        left: ${({ isOpen }) => isOpen ? '50px' : '300px'};
    }
`;



const Body = () => {

    const [{ isOpen, isLoading }, dispatch]  = useStateValue()

  return (
    <Router>
        <BodyLayout>
            <Sidebar />
            <BodyContent isOpen={isOpen}>
                {isLoading ? 
                    <Loader /> 
                    : 
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                }
            </BodyContent>
      </BodyLayout>
    </Router>
  )
}

export default Body