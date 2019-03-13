import { getDay, saveDay } from '../services/days';

export const getCalendar = async (obj:any, args:any, context:any, info:any): Promise<any> => {
  const day = await getDay(args.userId, args.date);
  return day;
}

export const writeDayInCalendar = async (obj:any, args:any, context:any, info:any) => {
  const day = await saveDay(args.userId, args.dayInfo);
  return {
    success: true,
    message: 'Success',
  }
};