
import users from '../___mocks___/users';

export const getUser = (obj:any, args:any, context:any, info:any): any => {
  return users.find(user => user.id === args.id);
}