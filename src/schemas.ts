import { gql } from 'apollo-server';
import { typeDef as User} from './schemas/user';
import { typeDef as Day} from './schemas/days';
import { makeExecutableSchema } from 'graphql-tools';

const Query = `
  type Query {
    """
    Test Message. 
    """
    me(id: Int!): User!
    day(userId: Int!, date:String): Day!
  }
`;

export default [Query, User, Day];