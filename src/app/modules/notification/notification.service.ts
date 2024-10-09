import { INotification } from './notification.interface';
import { NotificationModel } from './notification.model';

const createNotificationIntoDB = async (data: INotification) => {
  const notification = await NotificationModel.create(data);
  return notification;
};

export const NotificationService = { createNotificationIntoDB };
