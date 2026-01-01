'use client';

import { useState } from 'react';
import { ShoppingCart, Truck, Shield, CreditCard, Wallet, ArrowRight } from 'lucide-react';
import CustomerInfoForm from '@/components/CheckOut/CustomerForm';
import PaymentMethods from '@/components/CheckOut/paymentMethods';
import AllOrderSummery from '@/components/CheckOut/OrderSummery';
import CartItems from '@/components/CheckOut/CartItems';

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState<'items' | 'info' | 'payment'>('items');

  const cartItems = [
    {
      id: '1',
      name: 'Black Danaki Eyewear',
      price: 215,
      originalPrice: 230,
      quantity: 1,
      discount: 15
    },
    {
      id: '2',
      name: 'Silver Zilalem Eyewear',
      price: 230,
      quantity: 1
    }
  ];

  const orderSummary = {
    subtotal: 445,
    discount: 15,
    shipping: 0,
    tax: 0,
    total: 445
  };

  const userInfo = {
    firstName: 'Mohammad',
    lastName: 'Abdullah',
    address: 'AI, Heial 36, Noyasark, Sylhet ~3100',
    email: 'mohammad@example.com',
    phone: '+8801XXXXXXXXX'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className=" mx-auto px-4 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
          {/* Left Column - Checkout Process */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              {/* Checkout Steps */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setActiveStep('items')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeStep === 'items'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingCart size={20} />
                  <span className="font-medium">Cart Items</span>
                </button>
                <ArrowRight />
                <button
                  onClick={() => setActiveStep('info')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeStep === 'info'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Truck size={20} />
                  <span className="font-medium">Shipping</span>
                </button>
                <ArrowRight />
                <button
                  onClick={() => setActiveStep('payment')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeStep === 'payment'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <CreditCard size={20} />
                  <span className="font-medium">Payment</span>
                </button>
              </div>

              {/* Active Step Content */}
              <div className="mt-8">
                {activeStep === 'items' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Check Your Items
                    </h2>
                    <p className="text-gray-600 mb-6">
                      For a better experience, check your item and choose your shipping before ordering.
                    </p>
                    <CartItems items={cartItems} />
                  </div>
                )}

                {activeStep === 'info' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Customer Information
                    </h2>
                    <CustomerInfoForm userInfo={userInfo} />
                  </div>
                )}

                {activeStep === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Payment Details
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Select the payment method for your order
                    </p>
                    <PaymentMethods />
                  </div>
                )}
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center space-x-4">
              <Shield className="text-green-600" size={24} />
              <span className="text-gray-700 font-medium">
                Secure Checkout • 256-bit SSL Encryption • Your information is safe
              </span>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-3">
            <AllOrderSummery
              items={cartItems}
              summary={orderSummary}
              activeStep={activeStep}
              onProceed={() => {
                if (activeStep === 'items') setActiveStep('info');
                else if (activeStep === 'info') setActiveStep('payment');
                else {
                  // Handle final checkout
                  console.log('Processing payment...');
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;