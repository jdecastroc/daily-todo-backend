

import {getUser} from './resolvers/user';
import {getCalendar} from './resolvers/days';

export default {
  Query: {
    me: getUser,
    day: getCalendar,
  }
};