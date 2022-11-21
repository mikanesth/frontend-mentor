import { MongoClient } from "mongodb";
let uri = "mongodb+srv://mika:Mikadb123@test1.3wt90mr.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

client.connect().then(()=> {
    console.log('connected bro')
})