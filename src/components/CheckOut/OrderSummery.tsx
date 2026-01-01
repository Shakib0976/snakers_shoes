import { CartItem, OrderSummary } from '@/Types';
import { CheckCircle, Lock } from 'lucide-react';

interface OrderSummaryProps {
  items: CartItem[];
  summary: OrderSummary;
  activeStep: 'items' | 'info' | 'payment';
  onProceed: () => void;
}

const AllOrderSummery = ({ items, summary, activeStep, onProceed }: OrderSummaryProps) => {
  const getButtonText = () => {
    switch (activeStep) {
      case 'items': return 'Proceed to Shipping';
      case 'info': return 'Continue to Payment';
      case 'payment': return 'Pay $' + summary.total.toFixed(2);
      default: return 'Continue';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg sticky top-8">
      <div className="p-6 border-b">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <CheckCircle className="mr-2 text-green-600" size={20} />
          Current Order
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          The sum of all total payments for goods here
        </p>
      </div>

      <div className="p-6">
        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <div>
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                  {item.discount && (
                    <span className="text-sm text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      -${item.discount}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">
                  ${item.price.toFixed(2)}
                </div>
                {item.originalPrice && (
                  <div className="text-sm text-gray-400 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({items.length} items)</span>
            <span>${summary.subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-red-600">
            <span>Discount</span>
            <span>-${summary.discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Delivery Service</span>
            <span>{summary.shipping === 0 ? 'Free' : `$${summary.shipping.toFixed(2)}`}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Tax (0%)</span>
            <span>${summary.tax.toFixed(2)}</span>
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${summary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          onClick={onProceed}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center shadow-lg"
        >
          <Lock className="mr-2" size={20} />
          {getButtonText()}
        </button>

        {/* Security Note */}
        <p className="text-center text-xs text-gray-500 mt-4">
          By completing your purchase you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default AllOrderSummery;