pragma solidity ^0.4.11;

contract Stack {
    event Popped(bytes32 top, uint number, string name);
    event Pushed(bytes32 top, uint number, string name);
    uint public height = 0;
    bytes32 public top;
    struct Object {
        bytes32 next;
        uint number;
        string name;
    }
    mapping(bytes32 => Object) public objects;

    function Stack() public {

    }

    function push(uint _number,string _name) public returns (bool) {
        Object memory newObj = Object(top, _number, _name);
        bytes32 id = keccak256(newObj.number, newObj.name, now, height);
        objects[id] = newObj;
        top = id;
        height = height + 1;
        Pushed(top, newObj.number, newObj.name);
    }

    function pop() public returns (bool) {
        require(height > 0);
        bytes32 _top = top;
        top = objects[top].next;
        Popped(top, objects[_top].number, objects[_top].name);
        height = height - 1;
        delete objects[_top];
    }
}
