import React from 'react';

function loadRazorpayScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const RazorpayButton = ({ amount, items, store, onSuccess }) => {
  const handlePayment = async () => {
    const res = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }
    const options = {
      key: 'rzp_test_1DP5mmOlF5G5ag', // Razorpay public demo test key
      amount: amount * 100, // in paise
      currency: 'INR',
      name: store.name,
      description: 'Order Payment',
      handler: function (response) {
        onSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Test User',
        email: 'test@razorpay.com',
        contact: '9999999999'
      },
      notes: {
        items: items.map(i => `${i.name} x${i.quantity}`).join(', ')
      },
      theme: {
        color: '#4caf50'
      },
      method: {
        upi: true,
        card: true,
        netbanking: true
      },
      upi: {
        flow: 'collect',
        vpa: 'success@razorpay' // Dummy UPI for test mode
      },
      modal: {
        ondismiss: function() {
          alert('Payment popup closed.');
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{textAlign:'center'}}>
      <div style={{marginBottom:8, color:'#888', fontSize:'0.98rem'}}>
        <b>Test UPI:</b> Use <span style={{color:'#4caf50'}}>success@razorpay</span> as UPI ID in test mode.<br/>
        (No real money will be deducted)
      </div>
      <button style={{background:'#4caf50',color:'#fff',padding:'0.75rem 2rem',border:'none',borderRadius:'8px',fontSize:'1.1rem',cursor:'pointer'}} onClick={handlePayment}>
        Pay with Razorpay / UPI
      </button>
    </div>
  );
};

export default RazorpayButton; 