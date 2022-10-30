"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {
            type: graphql_1.GraphQLString,
            resolve: () => "Hello from the Query!"
        }
    }
});
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        hello: {
            type: graphql_1.GraphQLString,
            resolve: () => "Hello from the Mutation!"
        }
    }
});
exports.schema = new graphql_1.GraphQLSchema({ query, mutation });
