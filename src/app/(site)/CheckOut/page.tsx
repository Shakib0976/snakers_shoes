'use client';

import { useState } from 'react';
import { ShoppingCart, Truck, Shield, CreditCard, Wallet, ArrowRight, Check, User, MapPin, Phone, Mail } from 'lucide-react';
import AllOrderSummery from '@/components/CheckOut/OrderSummery';
import { CartItem, PaymentMethod, UserInfo } from '@/Types';
import Image from 'next/image';
import { CartData } from '@/server/Cart';

import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



const CheckoutPage = () => {


  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);
  const [activeStep, setActiveStep] = useState<'items' | 'info' | 'payment'>('items');
  // payments methods section 
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


  // customer info form data
  const [formData, setFormData] = useState<UserInfo>(userInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  interface CartItem {
    id: string;
    store: string;
    name: string;
    description?: string;
    originalPrice: number;
    discountPercentage?: number;
    finalPrice: number;
    image: string;
    selected: boolean;
    quantity: number;
    comboOffer?: boolean;
  }

  //order summery section 
  const [cartItems, setCartItems] = useState<CartItem[]>(CartData);
  const calculateTotals = () => {
    const selectedItems = cartItems.filter(item => item.selected);
    const totalPrice = selectedItems.reduce((sum, item) =>
      sum + (item.finalPrice * item.quantity), 0
    );
    const totalDiscount = selectedItems.reduce((sum, item) =>
      sum + ((item.originalPrice - item.finalPrice) * item.quantity), 0
    );

    return {
      totalPrice,
      totalDiscount,
    };
  };

  const totals = calculateTotals();

  // from validation if fillup 

  const isFormValid = () => {
    return (
      firstNameRef.current?.value.trim() &&
      lastNameRef.current?.value.trim() &&
      emailRef.current?.value.trim() &&
      phoneRef.current?.value.trim() &&
      addressRef.current?.value.trim()
    );
  };




  return (
    <div className="min-h-screen cart-bg  py-8">
      <div className=" mx-auto px-4 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
          {/* Left Column - Checkout Process */}
          <div className="lg:col-span-6">
            <div className="cart-sec-bg rounded-xl shadow-sm p-6 mb-6">
              {/* Checkout Steps */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setActiveStep('items')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${activeStep === 'items'
                    ? ' text-orange-600 dark:text-orange-300'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <ShoppingCart size={20} />
                  <span className="font-medium">Cart Items</span>
                </button>
                <ArrowRight />
                <button
                  onClick={() => setActiveStep('info')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${activeStep === 'info'
                    ? ' text-orange-600 dark:text-orange-300'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <Truck size={20} />
                  <span className="font-medium">Shipping</span>
                </button>
                <ArrowRight />
                <button
                  onClick={() => {
                    if (isFormValid()) {
                      setActiveStep('payment');
                    }
                  }}
                  disabled={!isFormValid()}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
    ${!isFormValid()
                      ? 'text-gray-400 cursor-not-allowed'
                      : activeStep === 'payment'
                        ? 'text-orange-600 dark:text-orange-300'
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
                    <div className="space-y-4 ">
                      {CartData.map((item) => (
                        <div key={item.id} className="flex  items-center justify-between p-4 border rounded-xl">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                              <Image src={item.image} alt={item.name} width={64} height={64} />
                            </div>

                            <div>
                              <h4 className="font-medium cart-text-primary">
                                {item.name}
                              </h4>
                              {item.description && (
                                <p className="text-sm cart-text-base mt-1">
                                  {item.description}
                                </p>
                              )}
                              <h1><span className='font-semibold'>Price:</span> {item.finalPrice}</h1>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {/* customer from */}

                {activeStep === 'info' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Customer Information
                    </h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 flex items-center">
                            <User size={16} className="mr-2" />
                            First Name
                          </label>
                          <input
                            ref={firstNameRef}
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            placeholder="First Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 flex items-center">
                            <User size={16} className="mr-2" />
                            Last Name
                          </label>
                          <input
                            ref={lastNameRef}
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 flex items-center">
                          <Mail size={16} className="mr-2" />
                          Email Address
                        </label>
                        <input
                          ref={emailRef}
                          type="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 flex items-center">
                          <Phone size={16} className="mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          ref={phoneRef}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full px-4 py-3 border border-gray-300  rounded-lg  transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 flex items-center">
                          <MapPin size={16} className="mr-2" />
                          Delivery Address
                        </label>
                        <textarea
                          name="address"
                          ref={addressRef}
                          required
                          onChange={handleChange}
                          rows={3}
                          placeholder="Delivery Address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}



                {/* payment methods section  */}
                {activeStep === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Payment Details
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Select the payment method for your order
                    </p>
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`p-3 rounded-lg ${selectedMethod === method.id
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
                  </div>
                )}
              </div>
            </div>

            {/* Security Badge */}
            <div className="cart-sec-bg rounded-xl shadow p-4 flex items-center justify-center space-x-4">
              <Shield className="text-green-600" size={24} />
              <span className="text-gray-700 font-medium">
                Secure Checkout • 256-bit SSL Encryption • Your information is safe
              </span>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-3">
            <AllOrderSummery
              items={CartData}
              Totals={totals}
              activeStep={activeStep}
              isDisabled={activeStep === 'info' && !isFormValid()}
              onProceed={() => {
                if (activeStep === 'items') {
                  setActiveStep('info');
                } else if (activeStep === 'info') {
                  if (isFormValid()) {
                    setActiveStep('payment');
                  }
                } else {
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