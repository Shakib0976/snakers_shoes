export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  originalPrice?: number;
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