const graphql = require('graphql')
const { GraphQLString, GraphQLObjectType } = graphql

const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLString },
    team: { type: GraphQLString }
  })
})

module.exports = TeamType