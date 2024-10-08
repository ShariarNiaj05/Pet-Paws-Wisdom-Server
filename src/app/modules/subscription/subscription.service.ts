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

const cancelSubscriptionFrmDB = async (
  userId: string,
): Promise<ISubscription | null> => {
  const subscription = await SubscriptionModel.findOneAndUpdate(
    { user: userId, isActive: true },
    { isActive: false },
    { new: true },
  );
  return subscription;
};

const getActiveSubscriptionFromDB = async (
  userId: string,
): Promise<ISubscription | null> => {
  const subscription = await SubscriptionModel.findOne({
    user: userId,
    isActive: true,
  });
  return subscription;
};

const renewSubscriptionIntoDB = async (
  userId: string,
  paymentId: string,
  endDate: Date,
): Promise<ISubscription | null> => {
  const subscription = await SubscriptionModel.findOneAndUpdate(
    { user: userId, isActive: true },
    { paymentId, endDate },
    { new: true },
  );
  return subscription;
};
export const SubscriptionService = {
  createSubscriptionIntoDB,
  cancelSubscriptionFrmDB,
  getActiveSubscriptionFromDB,
  renewSubscriptionIntoDB,
};
