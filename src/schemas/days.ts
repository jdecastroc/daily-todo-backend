export const typeDef = `
  type Day {
    id: Int!
    date: String!
    in: String
    out: String
    objective: String
    oportunities: [String]
    gratitudeList: [String]
    goalsCleared: Boolean
    meaningfulProgress: Boolean,
    improvedRelationships: Boolean,
    foundEnthusiasm: Boolean,
    happinessLevel: Int,
    overwork: String,
  }
`;