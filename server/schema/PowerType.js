const graphql = require('graphql')
const { GraphQLString, GraphQLObjectType } = graphql

const PowerType = new GraphQLObjectType({
  name: 'Power',
  fields: () => ({
    id: { type: GraphQLString },
    power: { type: GraphQLString },
    description: { type: GraphQLString }
  })
})

module.exports = PowerType