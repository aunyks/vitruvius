pragma solidity ^0.4.11;

contract LinkedList {

  event AddEntry(bytes32 head, uint number, string name, bytes32 next);
  event RemoveEntry(bytes32 head, uint number, string name, bytes32 next);
  uint public length = 0;
  bytes32 public head;
  struct Object {
    bytes32 next;
    uint number;
    string name;
  }
  mapping (bytes32 => Object) public objects;

  function LinkedList() public {
  }

  function addEntry(uint _number,string _name) public returns (bool) {
    Object memory object = Object(head,_number,_name);
    bytes32 id = keccak256(object.number,object.name,now,length);
    objects[id] = object;
    head = id;
    length = length + 1;
    AddEntry(head,object.number,object.name,object.next);
  }

  function removeEntry(bytes32 _id) public returns (bool) {
    require(length > 0);
    bytes32 current = head;
    while (current != 0 && current != _id && objects[current].next != _id) {
      current = objects[current].next;
    }
    // Let's not waste gas if the id doesn't exist
    require(current != 0);

    if (current != _id) {
      // Since we've found the node that points to the
      // node with id `_id`, we can point this node's
      // `next` to `_id`'s `next`
      objects[current].next = objects[_id].next;
    } else {
      // Since the current node is the head,
      // we can move the head to the next node
      // because this will soon be removed
      head = objects[_id].next;
    }
    length = length - 1;
    RemoveEntry(head, objects[_id].number, objects[_id].name, objects[_id].next);
    delete objects[_id];
  }

  //needed for external contract access to struct
  function getEntry(bytes32 _id) view public returns (bytes32, uint, string) {
    return (objects[_id].next, objects[_id].number, objects[_id].name);
  }
}