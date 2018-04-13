const graphql = require('graphql')
const db = require('../db')
const RootQuery = require('./RootQueryType')
const mutations = require('./mutations')
const {
  GraphQLSchema
} = graphql

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations
})