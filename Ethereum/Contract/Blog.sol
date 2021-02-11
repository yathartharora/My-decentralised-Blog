pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

contract Blog{
    
    address manager;
    
    struct File{
        string name;
        string pdf;
    }
    
    constructor() public {
        manager = msg.sender;
    }
    
    File[] public f;
    
    modifier restricted{
        require(msg.sender==manager);
        _;
    }
    
    function Upload(string name,string pdf) public restricted{
        
        f.push(File(name,pdf));
    }
    
    function display() public view returns(File[]){
        return f;
    }
}