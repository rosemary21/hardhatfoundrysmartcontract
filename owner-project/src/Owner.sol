pragma solidity ^0.8.33;

contract Owner {
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Zero address not allowed");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}
