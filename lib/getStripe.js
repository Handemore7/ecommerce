import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    console.log(process.env.NEXT_STRIPE_PUBLIC_KEY);
    stripePromise = loadStripe(`${process.env.NEXT_STRIPE_PUBLIC_KEY}`);
  }

  return stripePromise;
}

export default getStripe;