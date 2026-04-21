import { MongoClient } from 'mongodb';

const uri = 'mongodb://ecotrackadmin:EECCOO@ac-qfvfjfn-shard-00-00.bw49rlq.mongodb.net:27017,ac-qfvfjfn-shard-00-01.bw49rlq.mongodb.net:27017,ac-qfvfjfn-shard-00-02.bw49rlq.mongodb.net:27017/?ssl=true&replicaSet=atlas-4n2k9c-shard-0&authSource=admin&appName=Cluster0';

console.log('Trying to connect...');

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log('SUCCESS - connected!');
  await client.close();
} catch (err) {
  console.log('FAILED:', err.message);
}