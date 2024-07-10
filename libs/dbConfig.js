import { MongoClient } from "mongodb";

export async function connectToDataBase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nuqiLogs:isdROGhBpB88LQoG@nuqi.gbpvdyc.mongodb.net/NuqiLogs?retryWrites=true&w=majority"
  );

  return client;
}
