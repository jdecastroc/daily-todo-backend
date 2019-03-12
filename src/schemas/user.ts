export const typeDef = `
  type User {
    id: Int!
    name: String!
    username: String!
    avatar: String!
    lists: [List]
  }

  type List {
    name: String!
    component: String!
    icon: String!
  }
`;