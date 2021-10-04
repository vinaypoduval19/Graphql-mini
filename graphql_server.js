const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');
const fs = require('fs');

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8'}))

const resolvers = {
    Query: {
        players: async() => {
            const res = await axios.get('http://localhost:8000/players');
            return res.data;
        },
        playerById: async(root, args) => {
            const res = await axios.get(`http://localhost:8000/players/${args.id}`);
            return res.data ? res.data: null
        }
    },
    Player: {
        team: async (player) => {
            const res = await axios.get(`http://localhost:8000/teams/${player.teamId}`);
            return res.data;
        } 
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen({ port: 9000 })
.then(({ url })  => console.log(`🚀  Server ready at ${url}`))