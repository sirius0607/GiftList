const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

console.log("merkle root: ", root);