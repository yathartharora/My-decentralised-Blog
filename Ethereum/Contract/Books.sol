pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

contract BooksUpload{
    address manager;

    struct Books{
        string Book_name;
        string author;
        string summary;
    }

    constructor() public {
        manager = msg.sender;
    }

    modifier restricted{
        require(msg.sender==manager);
        _;
    }

    Books[] public book;

    function BookUpload(string bname, string auth, string sum) public restricted{
        book.push(Books(bname,auth,sum));
    }

    function Bookdisplay() public view returns(Books[]){
        return book;
    }
}