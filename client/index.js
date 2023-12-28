const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

   // create the merkle tree for the whole nice list
   const merkleTree = new MerkleTree(niceList);
 
   // find the proof that name parameter is in the list
   const name =  process.argv[2];
   if(!name) {
    console.log("name parameter is mandatory! See README.md for example.");
    return;
   }
   const index = niceList.findIndex(n => n === name);
   const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    // send name and proof to the server for validation
    name: name,
    proof: proof
  });
  
  console.log({ gift });
}

main();