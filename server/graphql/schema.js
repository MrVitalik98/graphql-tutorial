const { buildSchema } = require('graphql')


const schema = buildSchema(`
  type Alert {
    status: String
    message: String
  }

  type Movie {
    id: ID
    title: String
    rate: Float
    genre: [String]
    director: MovieDirector
    isWatched: Boolean
  }

  type MovieDirector {
    id: ID
    name: String
  }

  type Director {
    id: ID
    name: String
    age: Int
    movies: [String]
  }

  input MovieInput {
    title: String!
    rate: Float!
    genre: [String!]!
    directorId: ID!
    isWatched: Boolean
  }

  input DirectorInput {
    name: String!
    age: Int!
  }

  type Query {
    movies: [Movie]
    directors: [Director]
  }

  type Mutation {
    addMovie(movie: MovieInput): Alert
    updateMovie(movieId: ID!, movie: MovieInput): Alert
    deleteMovie(movieId: ID!): Alert
    addDirector(director: DirectorInput): Alert
    updateDirector(directorId: ID!, director: DirectorInput): Alert
    deleteDirector(directorId: ID!): Alert
  }
`)

module.exports = schema