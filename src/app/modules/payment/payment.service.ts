import { PaymentModel } from './payment.model';

const getPaymentsByUser = async (userId: string) => {
  const payments = await PaymentModel.find({ userId });
  return payments;
};

/* const createPaymentIntent = async (
  userId: string,
  amount: number,
  currency: string,
  paymentMethod: string,
) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Stripe expects the amount in cents
    currency,
    payment_method_types: ['card'],
  });

  const paymentData: IPayment = {
    userId,
    amount,
    currency,
    paymentMethod,
    status: 'pending',
    transactionId: paymentIntent.id,
  };

  const payment = await PaymentModel.create(paymentData);
  return paymentIntent;
}; */

export const PaymentService = { getPaymentsByUser };
