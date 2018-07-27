class Block {
    constructor(timestamp, data){
        this.index = 0;
        // data previousHash hash nonce
        this.timestamp = timestamp;
        this.data = 0;
        this.previousHash = 0;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash(){

    }
    mineBlock(difficulty){
        
    }
}