const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        categories: Category
        joke(category: String!): Joke
    }

    type Category {
        animal: String
        career: String
        celebrity: String
        dev: String
        explicit: String
        fashion: String
        food: String
        history: String
        money: String
        movie: String
        music: String
        political: String
        religion: String
        science: String
        sport: String
        travel: String
    }

    type Joke {
        id: ID!
        categories: [String]
        created_at: String
        icon_url: String
        updated_at: String
        url: String
        value: String
    }
`;

module.exports = typeDefs;