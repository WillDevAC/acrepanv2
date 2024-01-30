export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  number: string;
  address: string;
  city: string;
  complement: string;
  state: string;
  cep: string;
  document: null;
  createdAt: string;
  updatedAt: string;
  avatarId: null;
  currentPlanId: null;
  avatar: null;
  currentPlan: null;
  Order: Order[];
}

export interface Order {
  id: string;
  paymentUrl: string;
  typePayment: null;
  obs: null;
  totalValue: number;
  totalItems: number;
  deliveryDate: string;
  sellId: string;
  code: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  expireToPay: string;
  SellerOrder: SellerOrder[];
}

export interface SellerOrder {
  id: string;
  qtd: number;
  priceSeller: number;
  code: string;
  obs: null;
  clubDiscountPorcent: number;
  createdAt: string;
  updatedAt: string;
  productId: string;
  userId: null;
  orderId: string;
}
