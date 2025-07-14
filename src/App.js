import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [productCost, setProductCost] = useState('');
  const [pin, setPin] = useState(['', '', '', '']);

  const handlePinChange = (index, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    const newPin = [...pin];
    newPin[index] = numericValue.substring(0, 4);
    setPin(newPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullPin = pin.join('');
    if (fullPin.length !== 16) {
      alert('Please enter a valid 16-digit PIN.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email Address:', emailAddress);
    console.log('Product Cost Guess?:', productCost);
    console.log('Super Secret PIN:', fullPin);

    // Clear the form after submission
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmailAddress('');
    setProductCost('');
    setPin(['', '', '', '']);
  };

  return (
    <div>
      <h1>Product Purchase Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="productCost">Product Cost:</label>
          <input
            type="number"
            id="productCost"
            value={productCost}
            onChange={(e) => setProductCost(e.target.value)}
            required
          />
        </div>

        <div>
          <label>PIN:</label>
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength="4"
              value={pin[i]}
              onChange={(e) => handlePinChange(i, e.target.value)}
              required
            />
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
