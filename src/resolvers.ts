

import {getUser} from './resolvers/user';
import {getCalendar, writeDayInCalendar} from './resolvers/days';


export default {
  Query: {
    me: getUser,
    day: getCalendar,
  },
  Mutation: {
    saveDay: writeDayInCalendar,
  }
};