import days from '../___mocks___/days';

export const getCalendar = (obj:any, args:any, context:any, info:any): any => {
  return days.find(day => day.id === args.userId && day.date === args.date);
}