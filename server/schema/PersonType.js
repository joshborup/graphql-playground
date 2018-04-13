const graphql = require('graphql')
const { GraphQLString, GraphQLObjectType, isInputType, isOutputType, GraphQLInt } = graphql

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
})

module.exports = PersonType