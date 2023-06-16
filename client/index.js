const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

const merkleTree = new MerkleTree(niceList)
const root = merkleTree.getRoot()
const getIndex = (name) => {
  return niceList.findIndex(n => n === name)
}
const name = "Caroline Von"
const proof = merkleTree.getProof(getIndex(name))
const present = "cheems"

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof, leaf:name, root, present
  });

  console.log({ gift });
}

main();