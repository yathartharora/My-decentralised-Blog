pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

contract newsletter{
    address manager;
    
    struct Edition{
        string name;
        string link;
        string month;
    }
    
    constructor() public {
        manager = msg.sender;
    }
    
    modifier restricted{
        require(manager==msg.sender);
        _;
    }
    
    Edition[] public edition;
    
    function Newsletterupload(string n,string l, string m) public restricted{
        edition.push(Edition(n,l,m));
    }
    
    function display() public view returns(Edition[]){
        return edition;
    }
    
    
}