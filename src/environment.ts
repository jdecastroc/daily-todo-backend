const defaultPort = 4000;
const defaultRegion = "us-east-1";
const defaultEndpoint = "http://localhost:8000";

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  dynamodb: {
    region: string,
    endpoint: string,
    userTable: string | undefined,
    calendarTable: string | undefined,
  }
  port: number|string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  dynamodb: {
    region: process.env.AWS_DYNAMODB_REGION || defaultRegion,
    endpoint: process.env.AWS_SERVER_ENDPOINT || defaultEndpoint,
    userTable: process.env.AWS_DYNAMODB_USERTABLE,
    calendarTable: process.env.AWS_DYNAMODB_CALENDARTABLE,
  },
  port: process.env.PORT || defaultPort
};