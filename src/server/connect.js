
import{ MongoClient, ServerApiVersion } from 'mongodb'
const uri = process.env.MONGODB_URI

// database collection name

export const collectionNameObj={
    newsCollection:'news'
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version]

let client;
let clientPromise;
if(!uri){
    throw new Error("Please add MONGODB_URI to your .env.local file")
}
if(process.env.NODE_ENV==="development"){
    if(!global._mongoClientPromise){
        
        client= new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
        global._mongoClientPromise=client.connect()
    }
    clientPromise=global._mongoClientPromise;
}else{
     client= new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
        clientPromise=client.connect()
}



export default async function dbConnect(collection) {
 const client=await clientPromise;
 return client.db('news24').collection(collection)
}

