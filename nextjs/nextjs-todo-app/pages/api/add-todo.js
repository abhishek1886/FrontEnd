import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log('api called');
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://guptaabhishek1886:a1b7h7i0s1h3ek@cluster0.cd9v7gq.mongodb.net/todolist?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todoCollection = db.collection("todolist");
    const result = await todoCollection.insertOne(data);

    client.close();
    console.log(result);

    res.status(201).json({ message: "successfully added todo!", _id: result.insertedId });
  }
}

export default handler;
