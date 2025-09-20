import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import menuData from '../menuData';

const fallbackImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
const bubaLogo = 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'; // Bubble tea icon
const drinkIcon = 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'; // Drink icon overlay

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const GlassBg = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  padding-bottom: 3rem;
`;
const Hero = styled.div`
  max-width: 900px;
  margin: 0 auto 2.5rem auto;
  padding: 0;
  border-radius: 32px;
  background: rgba(255,255,255,0.45);
  box-shadow: 0 8px 40px rgba(76,175,80,0.13);
  backdrop-filter: blur(8px);
  text-align: center;
  position: relative;
  overflow: hidden;
`;
const HeroImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 32px 32px 0 0;
  filter: brightness(0.82) saturate(1.1);
  display: block;
`;
const HeroOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 32px 32px 0 0;
  background: linear-gradient(180deg,rgba(255,255,255,0.15) 0%,rgba(0,0,0,0.18) 100%);
  pointer-events: none;
`;
const HeroContent = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 2.5rem 2rem 1.5rem 2rem;
`;
const StoreLogo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 12px rgba(56,249,215,0.13);
  margin-bottom: 1rem;
  border: 3px solid #fff;
`;
const StoreName = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;
const StoreAddress = styled.p`
  color: #f1f8e9;
  font-size: 1.08rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.13);
`;
const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0 0.5rem 0;
`;
const NavBtn = styled.button`
  background: #fff;
  border: 2px solid #43e97b;
  border-radius: 16px;
  padding: 0.5rem 1.3rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #388e3c;
  box-shadow: 0 2px 8px rgba(76,175,80,0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover, &.active {
    background: #43e97b;
    color: #fff;
    border: 2px solid #43e97b;
  }
`;
const CategoryBox = styled.div`
  background: #fff;
  border: 2px solid #43e97b;
  border-radius: 18px;
  margin: 2.5rem auto 2rem auto;
  padding: 1.2rem 1.2rem 0.5rem 1.2rem;
  max-width: 1100px;
  box-shadow: 0 2px 12px rgba(76,175,80,0.08);
  @media (max-width: 600px) {
    padding: 0.7rem 0.3rem 0.3rem 0.3rem;
  }
`;
const CategoryTitle = styled.h2`
  color: #2d3748;
  font-weight: 700;
  margin: 0 0 1.1rem 0;
  font-size: 1.18rem;
  letter-spacing: 1px;
  border-left: 5px solid #43e97b;
  padding-left: 0.7rem;
`;
const CardRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding-bottom: 1.2rem;
  scrollbar-width: thin;
  scrollbar-color: #43e97b #e0eafc;
  &::-webkit-scrollbar {
    height: 8px;
    background: #e0eafc;
  }
  &::-webkit-scrollbar-thumb {
    background: #43e97b;
    border-radius: 8px;
  }
`;
const Card = styled.div`
  min-width: 210px;
  max-width: 220px;
  background: rgba(255,255,255,0.9);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(76,175,80,0.10);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: box-shadow 0.2s, transform 0.15s;
  animation: ${fadeIn} 0.7s cubic-bezier(.39,.575,.565,1) both;
  &:hover {
    box-shadow: 0 8px 32px rgba(76,175,80,0.18);
    transform: translateY(-4px) scale(1.03);
  }
`;
const CardCheckbox = styled.input`
  accent-color: #4caf50;
  width: 22px;
  height: 22px;
  margin: 1.1rem 0 0.5rem 0;
`;
const CardImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(76,175,80,0.10);
  transition: transform 0.18s;
  ${Card}:hover & {
    transform: scale(1.08);
  }
`;
const DrinkIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: rgba(255,255,255,0.85);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(76,175,80,0.10);
  padding: 3px;
`;
const CardName = styled.div`
  font-weight: 700;
  color: #222;
  font-size: 1.08rem;
  margin: 1.1rem 0 0.3rem 0;
  text-align: center;
`;
const CardPrice = styled.div`
  color: #4caf50;
  font-weight: 700;
  font-size: 1.13rem;
  margin-bottom: 0.7rem;
`;
const QtyControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.1rem 0 0.5rem 0;
`;
const QtyBtn = styled.button`
  background: #43e97b;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(76,175,80,0.10);
  transition: background 0.18s, transform 0.1s;
  &:hover {
    background: #388e3c;
    transform: scale(1.08);
  }
`;
const QtyValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
  color: #222;
`;
const SurpriseButton = styled.button`
  background: #fffbe7;
  color: #ff9800;
  border: 2px dashed #ff9800;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  margin: 2.5rem auto 0 auto;
  display: block;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #fff3cd;
    color: #e65100;
  }
`;
const pop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;
const SurpriseMsg = styled.div`
  color: #43a047;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1rem;
  animation: ${pop} 0.7s;
`;
const CartSummary = styled.div`
  background: rgba(255,255,255,0.85);
  border-radius: 18px;
  margin: 3rem auto 0 auto;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 2px 12px rgba(76,175,80,0.10);
  max-width: 500px;
`;
const CartTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #388e3c;
`;
const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1.08rem;
`;
const BuyButton = styled.button`
  background: linear-gradient(90deg,#43e97b 0%,#38f9d7 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 1.1rem 2.7rem;
  font-size: 1.18rem;
  margin-top: 1.7rem;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(76,175,80,0.10);
  transition: background 0.2s, transform 0.1s;
  width: 100%;
  &:hover {
    background: linear-gradient(90deg,#38f9d7 0%,#43e97b 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

function Menu({ onBuy }) {
  const [selected, setSelected] = useState({});
  const [checked, setChecked] = useState({});
  const [surprise, setSurprise] = useState(null);
  const [activeCat, setActiveCat] = useState('All');

  const handleQty = (catIdx, itemIdx, delta) => {
    setSelected(sel => {
      const key = `${catIdx}-${itemIdx}`;
      const current = sel[key]?.quantity || 0;
      const next = Math.max(0, Math.min(10, current + delta));
      if (next === 0) {
        setChecked(prev => ({ ...prev, [key]: false }));
        const { [key]: _, ...rest } = sel;
        return rest;
      }
      setChecked(prev => ({ ...prev, [key]: true }));
      return { ...sel, [key]: { ...menuData.menu[catIdx].items[itemIdx], quantity: next } };
    });
  };

  const handleCheck = (catIdx, itemIdx, isChecked) => {
    const key = `${catIdx}-${itemIdx}`;
    setChecked(prev => ({ ...prev, [key]: isChecked }));
    setSelected(sel => {
      if (!isChecked) {
        const { [key]: _, ...rest } = sel;
        return rest;
      }
      // If checked, set quantity to 1 if not already set
      if (!sel[key] || sel[key].quantity === 0) {
        return { ...sel, [key]: { ...menuData.menu[catIdx].items[itemIdx], quantity: 1 } };
      }
      return sel;
    });
  };

  const handleSurprise = () => {
    const allItems = menuData.menu.flatMap((cat, catIdx) => cat.items.map((item, itemIdx) => ({catIdx, itemIdx, ...item})));
    const random = allItems[Math.floor(Math.random() * allItems.length)];
    const key = `${random.catIdx}-${random.itemIdx}`;
    setChecked(prev => ({ ...prev, [key]: true }));
    setSelected(sel => ({ ...sel, [key]: { ...random, quantity: 1 } }));
    setSurprise(`Surprise! We picked "${random.name}" for you!`);
    setTimeout(() => setSurprise(null), 2000);
  };

  // Only include checked items with quantity > 0
  const selectedItems = Object.entries(selected)
    .filter(([key, item]) => checked[key] && item.quantity > 0)
    .map(([_, item]) => item);
  const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Category navigation
  const categories = ['All', ...menuData.menu.map(cat => cat.category)];
  const filteredMenu = activeCat === 'All' ? menuData.menu : menuData.menu.filter(cat => cat.category === activeCat);

  return (
    <GlassBg>
      <Hero>
        <HeroImg src={menuData.store.storeImage} alt="Buba Junction" />
        <HeroOverlay />
        <HeroContent>
          <StoreLogo src={bubaLogo} alt="Buba Junction Logo" />
          <StoreName>{menuData.store.name}</StoreName>
          <StoreAddress>{menuData.store.address}</StoreAddress>
          <Nav>
            {categories.map(cat => (
              <NavBtn
                key={cat}
                className={activeCat === cat ? 'active' : ''}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </NavBtn>
            ))}
          </Nav>
        </HeroContent>
      </Hero>
      {filteredMenu.map((cat, catIdx) => (
        <CategoryBox key={cat.category}>
          <CategoryTitle>{cat.category}</CategoryTitle>
          <CardRow>
            {cat.items.map((item, itemIdx) => {
              const key = `${menuData.menu.indexOf(cat)}-${itemIdx}`;
              const qty = selected[key]?.quantity || 0;
              return (
                <Card key={item.name}>
                  <CardCheckbox
                    type="checkbox"
                    checked={!!checked[key]}
                    onChange={e => handleCheck(menuData.menu.indexOf(cat), itemIdx, e.target.checked)}
                  />
                  <CardImgWrap>
                    <CardImg
                      src={item.image}
                      alt={item.name}
                      onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                    />
                    <DrinkIcon src={drinkIcon} alt="Drink" />
                  </CardImgWrap>
                  <QtyControl>
                    <QtyBtn onClick={() => handleQty(menuData.menu.indexOf(cat), itemIdx, -1)} disabled={qty === 0}>-</QtyBtn>
                    <QtyValue>{qty}</QtyValue>
                    <QtyBtn onClick={() => handleQty(menuData.menu.indexOf(cat), itemIdx, 1)} disabled={qty === 10}>+</QtyBtn>
                  </QtyControl>
                  <CardName>{item.name}</CardName>
                  <CardPrice>₹{item.price}</CardPrice>
                </Card>
              );
            })}
          </CardRow>
        </CategoryBox>
      ))}
      <SurpriseButton onClick={handleSurprise}>Surprise Me!</SurpriseButton>
      {surprise && <SurpriseMsg>{surprise}</SurpriseMsg>}
      <CartSummary>
        <CartTitle>Selected Items</CartTitle>
        {selectedItems.length === 0 && <div style={{color:'#888'}}>No items selected.</div>}
        {selectedItems.map((item, idx) => (
          <CartItem key={item.name}>
            <span>{item.name} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </CartItem>
        ))}
        <div style={{marginTop:'1rem',fontWeight:700,fontSize:'1.15rem',textAlign:'right'}}>Total: ₹{total}</div>
        <div style={{textAlign:'center'}}>
          <BuyButton disabled={selectedItems.length === 0} onClick={() => onBuy(selectedItems, total)}>
            Buy It
          </BuyButton>
        </div>
      </CartSummary>
    </GlassBg>
  );
}

export default Menu; 