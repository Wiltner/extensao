import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.highlight};
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
`;

const Page2 = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para adicionar a quantia de dinheiro e o motivo ao banco de dados
    console.log(`Amount: ${amount}, Reason: ${reason}`);
    setAmount('');
    setReason('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Quantia de dinheiro"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <TextArea
          placeholder="Motivo"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Container>
  );
};

export default Page2;