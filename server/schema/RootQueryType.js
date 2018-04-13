const PersonType = require('./PersonType')
const HeroType = require('./HeroType')
const graphql = require('graphql')
const db = require('../db')
const { GraphQLNonNull, GraphQLObjectType, GraphQLList, GraphQLInt } = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:  {
    people: {
      type: new GraphQLList(PersonType),
      resolve: () => {
        return db
          .then(db => db.getPeople())
          .then(allPeople => allPeople)
          .catch(err => console.error(err))
      }
    },
    person: {
      type: PersonType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (parentVal, { id }) => {
        return db
          .then(db => db.findPerson([id]))
          .then(person => person[0])
          .catch(err => console.error(err))
      }
    },
    hero: {
      type: HeroType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (parentVal, args) => {
        return db
          .then(db => db.findHero([ args.id ]))
          .then(hero => hero[0])
          .catch(err => console.error(err))
      }
    },
    heroes: {
      type: new GraphQLList(HeroType),
      resolve: () => {
        return db
          .then(db => db.getHeroes())
          .then(heroes => heroes)
          .catch(err => console.error(err))
      }
    }
  }
})

module.exports = RootQuery