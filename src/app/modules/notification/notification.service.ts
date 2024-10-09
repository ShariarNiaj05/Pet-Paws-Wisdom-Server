import { INotification } from './notification.interface';
import { NotificationModel } from './notification.model';

const createNotificationIntoDB = async (data: INotification) => {
  const notification = await NotificationModel.create(data);
  return notification;
};
const getNotificationsByUserIdFromDB = async (userId: string) => {
  const notifications = await NotificationModel.find({
    recipient: userId,
  }).populate('recipient');
  return notifications;
};
export const NotificationService = {
  createNotificationIntoDB,
  getNotificationsByUserIdFromDB,
};
