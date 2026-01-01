'use client';

import { useState } from 'react';
import { CreditCard, Wallet, Truck, Check } from 'lucide-react';
import { PaymentMethod } from '@/Types';


const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('cod');

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: 'Wallet',
      description: 'Pay when you receive the item'
    },
    {
      id: 'card',
      name: 'Online Payment',
      icon: 'CreditCard',
      description: 'Credit/Debit Card (Visa, MasterCard, Amex)'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: 'Bank',
      description: 'Direct bank transfer payment'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard size={24} />;
      case 'Wallet': return <Wallet size={24} />;
      case 'Truck': return <Truck size={24} />;
      default: return <Wallet size={24} />;
    }
  };

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          onClick={() => setSelectedMethod(method.id)}
          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
            selectedMethod === method.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                selectedMethod === method.id
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {getIcon(method.icon)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{method.name}</h4>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
            {selectedMethod === method.id && (
              <Check className="text-blue-600" size={24} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;