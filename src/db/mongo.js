import { MongoClient } from "mongodb";
let uri = "modty"

const client = new MongoClient(uri);

client.connect().then(()=> {
    console.log('connected bro')
})