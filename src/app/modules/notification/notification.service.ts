import { INotification } from './notification.interface';
import { NotificationModel } from './notification.model';

const createNotification = async (data: INotification) => {
  const notification = await NotificationModel.create(data);
  return notification;
};

export const NotificationService = {};
