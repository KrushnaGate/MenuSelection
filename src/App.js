import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Receipt from './components/Receipt';
import RazorpayButton from './components/RazorpayButton';
import menuData from './menuData';

function App() {
  const [step, setStep] = useState('menu');
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentId, setPaymentId] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('buba_receipts');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const saveReceipt = (receipt) => {
    const updated = [receipt, ...history];
    setHistory(updated);
    localStorage.setItem('buba_receipts', JSON.stringify(updated));
  };

  const handleBuy = (items, total) => {
    setSelectedItems(items);
    setTotal(total);
    setStep('payment');
  };

  const handlePaymentSuccess = (paymentId) => {
    setPaymentId(paymentId);
    setStep('receipt');
    saveReceipt({
      store: menuData.store,
      items: selectedItems,
      total,
      paymentId,
      date: new Date().toLocaleString()
    });
  };

  const handleHome = () => {
    setStep('menu');
    setSelectedItems([]);
    setTotal(0);
    setPaymentId(null);
  };

  const handleViewHistory = () => {
    setStep('history');
  };

  if (step === 'menu') {
    return (
      <>
        <div style={{textAlign:'right',maxWidth:1200,margin:'1.5rem auto 0 auto'}}>
          <button style={{background:'#fff',color:'#43e97b',border:'2px solid #43e97b',borderRadius:8,padding:'0.5rem 1.2rem',fontWeight:700,cursor:'pointer',fontSize:'1rem'}} onClick={handleViewHistory}>
            View History
          </button>
        </div>
        <Menu onBuy={handleBuy} />
      </>
    );
  }
  if (step === 'payment') {
    return (
      <div style={{textAlign:'center',marginTop:'3rem'}}>
        <h2>Confirm & Pay</h2>
        <div style={{margin:'2rem auto',maxWidth:400}}>
          <RazorpayButton
            amount={total}
            items={selectedItems}
            store={menuData.store}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    );
  }
  if (step === 'receipt') {
    return <Receipt store={menuData.store} items={selectedItems} total={total} paymentId={paymentId} onHome={handleHome} />;
  }
  if (step === 'history') {
    return (
      <div style={{maxWidth:600,margin:'2.5rem auto',background:'#f9f9f9',borderRadius:16,boxShadow:'0 4px 24px rgba(0,0,0,0.08)',padding:'2rem'}}>
        <h2 style={{textAlign:'center',marginBottom:'1.5rem'}}>Order History</h2>
        {history.length === 0 && <div style={{color:'#888',textAlign:'center'}}>No receipts yet.</div>}
        {history.map((r, idx) => (
          <div key={idx} style={{border:'1.5px solid #43e97b',borderRadius:10,padding:'1rem',marginBottom:'1.2rem',background:'#fff'}}>
            <div style={{fontWeight:700}}>{r.store.name}</div>
            <div style={{fontSize:'0.98rem',color:'#555'}}>{r.store.address}</div>
            <div style={{fontSize:'0.97rem',color:'#888',margin:'0.2rem 0 0.7rem 0'}}>{r.date}</div>
            <ul style={{paddingLeft:18,margin:0}}>
              {r.items.map((item, i) => (
                <li key={i}>{item.name} x {item.quantity} <span style={{color:'#43e97b'}}>₹{item.price * item.quantity}</span></li>
              ))}
            </ul>
            <div style={{fontWeight:600,marginTop:'0.5rem'}}>Total: ₹{r.total}</div>
            <div style={{color:'#388e3c',fontWeight:600}}>Paid</div>
            <div style={{fontSize:'0.93rem',color:'#aaa',marginTop:'0.3rem'}}>Payment ID: {r.paymentId}</div>
          </div>
        ))}
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <button style={{background:'#43e97b',color:'#fff',border:'none',borderRadius:8,padding:'0.8rem 2.2rem',fontWeight:700,cursor:'pointer',fontSize:'1.08rem'}} onClick={handleHome}>Home</button>
        </div>
      </div>
    );
  }
  return null;
}

export default App; 