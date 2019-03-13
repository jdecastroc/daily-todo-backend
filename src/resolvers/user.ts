
import { getUser as getUserById } from '../services/user';

export const getUser = async (obj:any, args:any, context:any, info:any): Promise<any> => {
  const user = await getUserById(args.id);
  return user;
}