export const schema = gql`
  type GeneratePrice {
    id: Int!
    Activity: String!
    State: String!
    Acreage: Int!
    createdAt: DateTime!
  }

  type Query {
    generatePrices: [GeneratePrice!]! @requireAuth
    generatePrice(id: Int!): GeneratePrice @requireAuth
  }

  input CreateGeneratePriceInput {
    Activity: String!
    State: String!
    Acreage: Int!
  }

  input UpdateGeneratePriceInput {
    Activity: String
    State: String
    Acreage: Int
  }

  type Mutation {
    createGeneratePrice(input: CreateGeneratePriceInput!): GeneratePrice!
      @requireAuth
    updateGeneratePrice(
      id: Int!
      input: UpdateGeneratePriceInput!
    ): GeneratePrice! @requireAuth
    deleteGeneratePrice(id: Int!): GeneratePrice! @requireAuth
  }
`
