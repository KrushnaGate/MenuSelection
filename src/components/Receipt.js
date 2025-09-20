import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  background: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2rem;
  text-align: center;
`;
const Table = styled.table`
  width: 100%;
  margin: 1.5rem 0;
  border-collapse: collapse;
`;
const Th = styled.th`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
`;
const Td = styled.td`
  padding: 0.5rem;
`;
const Paid = styled.div`
  color: #388e3c;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;
const HomeButton = styled.button`
  margin-top: 2.5rem;
  background: linear-gradient(90deg,#43e97b 0%,#38f9d7 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(76,175,80,0.10);
  transition: background 0.2s, transform 0.1s;
  &:hover {
    background: linear-gradient(90deg,#38f9d7 0%,#43e97b 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

function Receipt({ store, items, total, paymentId, onHome }) {
  return (
    <Container>
      <h2>Payment Receipt</h2>
      <div><b>{store.name}</b></div>
      <div>{store.address}</div>
      <Table>
        <thead>
          <tr>
            <Th>Item</Th>
            <Th>Qty</Th>
            <Th>Price</Th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <Td>{item.name}</Td>
              <Td>{item.quantity}</Td>
              <Td>₹{item.price * item.quantity}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{fontWeight: 600, fontSize: '1.1rem'}}>Total: ₹{total}</div>
      <Paid>Paid</Paid>
      {paymentId && <div style={{marginTop: '1rem', fontSize: '0.95rem'}}>Payment ID: {paymentId}</div>}
      {onHome && (
        <HomeButton onClick={onHome}>Home</HomeButton>
      )}
    </Container>
  );
}

export default Receipt; 