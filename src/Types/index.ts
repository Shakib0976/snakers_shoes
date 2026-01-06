
export interface CartItem {
  id: string;
  store: string;
  name: string;
  description?: string;
  originalPrice?: number;
  discountPercentage?: number;
  finalPrice: number;
  image: string;
  selected: boolean;
  quantity: number;
  comboOffer?: boolean;
  price: number;

  discount?: number;
}
export interface OrderSummary {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}