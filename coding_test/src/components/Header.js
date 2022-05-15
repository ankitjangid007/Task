import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        background-color: #090b13;
        display: flex;
        align-items: center;
        padding: 0 36px;
        letter-spacing: 16px;
        z-index: 3;
        border-bottom: 1px solid #ddd;
    `;

    const Logo = styled.div`
        padding: 0;
        width: 80px;
        margin-top: 4px;
        max-height: 70px;
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        font-size: 12px;
        display: inline-block;
    `;

const Header = () => {

  return (
    <Container>
        <Logo>
            <h1>Logo</h1>
        </Logo>
    </Container>
  )
}

export default Header