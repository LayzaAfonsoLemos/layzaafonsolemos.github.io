export interface Plan {
    id: string;
    name: string;
    price: number;
    features: string[];
}

export interface CartItem {
    id: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface PaymentResponse {
    success: boolean;
    message: string;
    transactionId?: string;
}