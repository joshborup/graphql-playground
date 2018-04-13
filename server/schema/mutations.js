const graphql = require('graphql')
const db = require('../db')
const PersonType = require('./PersonType')
const HeroType = require('./HeroType')
const PowerType = require('./PowerType')
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } = graphql

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addPerson: {
      type: PersonType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: (parentVal, { name }) => {
        return db
          .then(db => db.addPerson([ name ]))
          .then(newPerson => newPerson[0])
          .catch(err => console.error(err))
      }
    },
    addPower: {
      type: PowerType,
      args: { 
        power: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) } 
      },
      resolve: (parentVal, {power, description }) => {
        return db
          .then(db => db.addPower([ power, description ]))
          .then(newPower => newPower[0] )
          .catch(err => console.error(err))
      }
    },
    addHero: {
      type: HeroType,
      args: { 
        name: { type: new GraphQLNonNull(GraphQLString) },
        identity: { type: new GraphQLNonNull(GraphQLInt) },
        universe: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parentVal, { name, identity, universe }) => {
        return db
          .then(db => db.addHero([ name, identity, universe ]))
          .then(newHero => newHero[0])
          .catch(err => console.error(err))
      }
    },
    editPerson: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString }
      },
      resolve: (parentVal, { name, id }) => {
        return db
          .then(db => db.editPerson([ name, id ]))
          .then(person => person[0])
          .catch(err => console.error(err))
      }
    }
  })
})

module.exports = mutations