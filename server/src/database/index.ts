import { MongoClient } from "mongodb";

const user = "user_1";
const userPassword = "password";
const cluster = "cluster0.a8suro4";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db("main");
  };     
