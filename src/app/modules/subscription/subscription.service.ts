import { ISubscription } from './subscription.interface';
import { SubscriptionModel } from './subscription.model';

const createSubscriptionIntoDB = async (
  userId: string,
  plan: string,
  paymentId: string,
  endDate: Date,
): Promise<ISubscription> => {
  const newSubscription = await SubscriptionModel.create({
    user: userId,
    plan,
    paymentId,
    endDate,
  });
  return newSubscription;
};

export const SubscriptionService = {};
