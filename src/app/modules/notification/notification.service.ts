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

const markNotificationAsReadIntoDB = async (id: string) => {
  const notification = await NotificationModel.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true },
  );
  return notification;
};

export const NotificationService = {
  createNotificationIntoDB,
  getNotificationsByUserIdFromDB,
  markNotificationAsReadIntoDB,
};
