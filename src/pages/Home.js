import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Home = () => (
  <Container>
    {/* Conteúdo da página Home */}
  </Container>
);

export default Home;