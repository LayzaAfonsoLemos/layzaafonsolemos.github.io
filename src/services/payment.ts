import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const initiatePayment = async (amount: number, currency: string) => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
    });

    const sessionId = await response.json();
    const result = await stripe?.redirectToCheckout({ sessionId });

    if (result?.error) {
        console.error(result.error.message);
    }
};

export const handlePaymentSuccess = (sessionId: string) => {
    // Logic to handle successful payment
};

export const handlePaymentFailure = (error: any) => {
    // Logic to handle payment failure
};