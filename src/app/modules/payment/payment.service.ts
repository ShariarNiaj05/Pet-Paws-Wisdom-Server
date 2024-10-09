import { PaymentModel } from './payment.model';

const getPaymentsByUser = async (userId: string) => {
  const payments = await PaymentModel.find({ userId });
  return payments;
};

export const PaymentService = { getPaymentsByUser };
