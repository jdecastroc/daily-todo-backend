import { gql } from 'apollo-server';
import { typeDef as User} from './schemas/user';
import { typeDef as Day} from './schemas/days';
import { makeExecutableSchema } from 'graphql-tools';

type Day = {
  id: Number,
  date: String
  in: String
  out: String
  objective: String
  oportunities: [String]
  gratitudeList: [String]
  goalsCleared: Boolean
  meaningfulProgress: Boolean,
  improvedRelationships: Boolean,
  foundEnthusiasm: Boolean,
  happinessLevel: Number,
  overwork: String,
}

const Query = `
  type Query {
    """
    Test Message. 
    """
    me(id: Int!): User!
    day(userId: Int!, date:String): Day!
  }
  type Mutation {
    saveDay(userId: Int!, dayInfo: DayInput!): DayInputPayload!
  }
`;

export default [Query, User, Day];