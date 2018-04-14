const graphql = require('graphql')
const PersonType = require('./PersonType')
const PowerType = require('./PowerType')
const db = require('../db')
const { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } = graphql

const HeroType = new GraphQLObjectType({
  name: 'Hero',
  fields: () => ({
    name: { type: GraphQLString },
    person_id: { type: GraphQLInt },
    universe_id: { type: GraphQLInt },
    alterEgo: { 
      type: PersonType,
      fields: { name: { type: GraphQLString } },
      resolve: (parentVal) => {
        return db
          .then(db => db.findPerson([ parentVal.person_id ]))
          .then(alterEgo => alterEgo[0])
          .catch(err => console.error(err))
      }
    },
    powers: {
      type: new GraphQLList(PowerType),
      fields: {
        power: { type: GraphQLString },
        desription: { type: GraphQLString }
      },
      resolve: (parentVal) => {
        return db
          .then(db => db.getPowers([ parentVal.id ]))
          .then(powers => powers)
          .catch(err => console.error(err))
      }
    }
  })
})

module.exports = HeroType