const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, data){
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = 0;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp+ this.data +this.nonce).toString();
    }
    mineBlock(difficulty){

    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesis()];
    }
    createGenesis(){
        return new Block(0, "7/27/2018", "Genesis block", "0")
    }
    latestBlock(){
        return this.chain[this.chain.length -1]
    }
    addBlock(newBlock){
        newBlock.index = this.latestBlock().index+1;
        newBlock.previousHash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    checkValid(){
        for(let i = 1; i <this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain [i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

let jsChain = new Blockchain();
jsChain.addBlock(new Block("7/28/2018", {amount: 5}));
jsChain.addBlock(new Block("7/29/2018", {amount: 10}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is Blockchain valid? "+ jsChain.checkValid());