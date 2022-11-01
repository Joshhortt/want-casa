import { MongoClient } from "mongodb";

const user = "user_1";
const userPassword = "";
const cluster = "cluster0.a8suro4";

export const connectDatabase = () =>  {};

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;