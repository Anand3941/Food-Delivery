import React, { useState } from 'react';
import {
  ChevronDown,
  Lock,
  Wallet,
  CreditCard,
  Truck,
  Banknote,
  Smartphone,
} from 'lucide-react';
import OrderSuccess from './OrderSuccess';

const PaymentOption = ({ total }) => {
  const [activeOption, setActiveOption] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const toggleOption = (option) => {
    setActiveOption(activeOption === option ? '' : option);
    setIsOrderPlaced(false); // Reset order status when toggling
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md relative z-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Step 3 of 3</h2>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Lock size={14} />
          <span>100% Secure</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-3 border rounded-md px-4">
        <span className="text-sm text-gray-700 font-medium">Total Amount</span>
        <span className="text-lg font-semibold text-blue-600">₹{total.toFixed(2)}</span>
      </div>

      {/* Cashback Banner */}
      <div className="mt-3 bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-md flex justify-between items-center">
        <span>
          5% Cashback
          <br />
          <span className="text-xs font-normal text-green-700">
            Claim now with payment offers
          </span>
        </span>
        <div className="w-6 h-6 bg-pink-100 rounded-full" />
      </div>

      {/* Payment Options */}
      <div className="mt-4 space-y-3">
        {/* UPI */}
        <div>
          <button onClick={() => toggleOption('upi')} className="flex justify-between w-full p-3 border rounded-md items-center">
            <div className="flex items-center gap-2">
              <Smartphone size={20} />
              <span className="text-sm">UPI</span>
            </div>
            <ChevronDown size={16} />
          </button>

          {activeOption === 'upi' && (
            <>
              <div className="mt-2 p-3 border rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="upi" defaultChecked />
                    Google Pay
                  </label>
                  <button onClick={handlePlaceOrder} className="bg-yellow-400 text-white px-4 py-1 rounded-md text-sm">
                    Pay ₹{total.toFixed(2)}
                  </button>
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="upi" />
                  Add new UPI ID
                  <span className="text-blue-500 text-xs ml-2 cursor-pointer">How to find?</span>
                </label>
              </div>
              {isOrderPlaced && <OrderSuccess />}
            </>
          )}
        </div>

        {/* Card */}
        <div>
          <button onClick={() => toggleOption('card')} className="flex justify-between w-full p-3 border rounded-md items-center">
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <CreditCard size={20} />
                <span className="text-sm">Credit / Debit / ATM Card</span>
              </div>
              <span className="text-xs text-green-600">
                5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              </span>
            </div>
            <ChevronDown size={16} />
          </button>

          {activeOption === 'card' && (
            <>
              <div className="mt-2 p-3 border rounded-md space-y-3">
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full border p-2 rounded-md text-sm" />
                <div className="flex gap-2">
                  <input type="text" placeholder="MM / YY" className="w-1/2 border p-2 rounded-md text-sm" />
                  <input type="text" placeholder="CVV" className="w-1/2 border p-2 rounded-md text-sm" />
                </div>
                <button onClick={handlePlaceOrder} className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md text-sm font-medium">
                  Pay ₹{total.toFixed(2)}
                </button>
              </div>
              {isOrderPlaced && <OrderSuccess />}
            </>
          )}
        </div>

        {/* Net Banking */}
        <div>
          <button onClick={() => toggleOption('netbanking')} className="flex justify-between w-full p-3 border rounded-md items-center">
            <div className="flex items-center gap-2">
              <Banknote size={20} />
              <span className="text-sm">Net Banking</span>
            </div>
            <ChevronDown size={16} />
          </button>

          {activeOption === 'netbanking' && (
            <>
              <div className="mt-2 p-3 border rounded-md space-y-2">
                {[
                  'State Bank of India',
                  'HDFC Bank',
                  'ICICI Bank',
                  'Kotak Mahindra Bank',
                  'Axis Bank',
                  'Federal Bank',
                  'Indian Overseas Bank',
                  'Indian Bank',
                ].map((bank) => (
                  <label key={bank} className="flex items-center gap-2 text-sm">
                    <input type="radio" name="bank" />
                    {bank}
                  </label>
                ))}
                <button onClick={handlePlaceOrder} className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md text-sm font-medium">
                  Pay ₹{total.toFixed(2)}
                </button>
              </div>
              {isOrderPlaced && <OrderSuccess />}
            </>
          )}
        </div>

        {/* COD */}
        <div>
          <button onClick={() => toggleOption('cod')} className="flex justify-between w-full p-3 border rounded-md items-center">
            <div className="flex items-center gap-2">
              <Truck size={20} />
              <span className="text-sm">Cash on Delivery</span>
            </div>
            <ChevronDown size={16} />
          </button>

          {activeOption === 'cod' && (
            <>
              <div className="mt-2 bg-gray-50 border p-3 rounded-md">
                <p className="text-sm text-gray-600 mb-2">
                  39,754 people used online payment options in the last hour. Pay online now for safe and contactless delivery.
                </p>
                <button onClick={handlePlaceOrder} className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md text-sm font-medium">
                  Place Order
                </button>
              </div>
              {isOrderPlaced && <OrderSuccess />}
            </>
          )}
        </div>
      </div>

      {/* Wallet (Disabled) */}
      <div className="mt-3 flex items-center justify-between border p-3 rounded-md opacity-50">
        <div className="flex items-center gap-2">
          <Wallet size={20} />
          <span className="text-sm">Wallet</span>
        </div>
        <span className="text-xs text-gray-400">Unavailable</span>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        35 Crore happy customers and counting!
        <div className="text-2xl">😊</div>
      </div>
    </div>
  );
};

export default PaymentOption;
