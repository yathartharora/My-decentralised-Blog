pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

contract Blog{
    
    address manager;
    
    struct File{
        string name;
        string pdf;
    }
    
    struct Books{
        string Book_name;
        string author;
        string summary;
    }
    
    constructor() public {
        manager = msg.sender;
    }
    
    File[] public f;
    Books[] public book;
    
    modifier restricted{
        require(msg.sender==manager);
        _;
    }
    
    function Upload(string name,string pdf) public restricted{
        
        f.push(File(name,pdf));
    }
    
    function BookUpload(string bname, string auth, string sum) public restricted{
        book.push(Books(bname,auth,sum));
    }
    
    function display() public view returns(File[]){
        return f;
    }
    
    function Bookdisplay() public view returns(Books[]){
        return book;
    }
}