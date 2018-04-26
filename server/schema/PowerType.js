const graphql = require('graphql')
const { GraphQLString, GraphQLObjectType, GraphQLInt } = graphql

const PowerType = new GraphQLObjectType({
  name: 'Power',
  fields: () => ({
    id: { type: GraphQLInt },
    power: { type: GraphQLString },
    description: { type: GraphQLString }
  })
})

module.exports = PowerType