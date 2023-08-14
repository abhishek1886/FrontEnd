import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://guptaabhishek1886:a1b7h7i0s1h3ek@cluster0.cd9v7gq.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetus");

      const result = await meetupsCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: "Meetup Inserted!", _id: result.data.insertedId });
    }
  } catch (err) {
    console.log(err.message);
  }
}

export default handler;
