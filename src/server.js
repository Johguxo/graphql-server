import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from "graphql-tag"
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import resolvers from './resolvers.js'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH = resolve(__dirname,'..', 'schema.graphql')

console.log(PATH)
const typeDefs = gql(
  readFileSync(PATH, 'utf-8')
)

const schema = {typeDefs, resolvers}
const server = new ApolloServer(schema)

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at  ${url}`)