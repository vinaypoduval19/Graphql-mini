const { ApolloServer } = require('apollo-server');
const axios = require('axios');

const typeDefs = `
    type User {
        id: Int!
        email: String!
        first_name: String!
        last_name: String!
        avatar: String!
    }
    type Query{
        users: [User]
    }
`

const resolvers = {
    Query: {
        users: async() => {
            const res = await axios.get('http://localhost:8000/users');
            return res.data;
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen({ port: 9000 })
.then(({ url })  => console.log(`🚀  Server ready at ${url}`))