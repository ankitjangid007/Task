import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider';


const Container = styled.div`
    display: flex;
    padding-left: 250px;
    padding-top: 200px;

    svg {

        position: relative;
        width: 150px;
        height: 150px;
    
        circle {
            width: 100%;
            height: 100%;
            fill: none;
            stroke-width: 10;
            stroke: #00a1ff;
            stroke-linecap: round;
            transform: translate(5px, 5px);
            stroke-dasharray: 440;
            stroke-dashoffset: 440;
            animation: animate 4s linear infinite;
            
            @keyframes animate {
                0% {
                    stroke-dashoffset: 440;
                }    
                50% {
                    stroke-dashoffset: 0;
                }    
                50.1% {
                    stroke-dashoffset: 880;
                }
            }
        }
    }
`;



const Loader = () => {

    const [{ isLoading }, dispatch] = useStateValue()
    const [count, setCount] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(count - 1);
        }, 1000);

        if(count <= 0){
            clearInterval(interval)
            dispatch({type: 'IS_PAGE_LOADING', isLoading: !isLoading})
        }

        return () => {
          clearInterval(interval);
        };

      });    


  return (
      <Container>
        <svg id='loader' preserveAspectRatio="none">
            <circle cx='70' cy='70' r=' 70'></circle> 
            <text id='myTimer' textAnchor='middle' x='70' y='85' style={{fontSize: '40px', fill: '343434'}}>{count}</text>
        </svg>
      </Container>
  )
}

export default Loader