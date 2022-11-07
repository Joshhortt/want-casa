import { MongoClient } from 'mongodb';
import { Database } from '../lib/types';

const user = "user_001";
const userPassword = "";
const cluster = "";

const uri = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
    
    const client = await MongoClient.connect(uri);
        
    const db = client.db("main");

    return {
      listings: db.collection("test_listings")
  };  
};