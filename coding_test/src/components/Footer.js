import React from 'react'
import styled from 'styled-components'

  const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-color: #090b13;
    border-top: 1px solid #ddd;
  `;
  const Content = styled.div`
    padding: 12px;
  `;

const Footer = () => {

  return (
    <Container>
      <Content>
        <span>Copyright &copy;Ankit Jangid</span>
      </Content>
    </Container>
  )
}

export default Footer