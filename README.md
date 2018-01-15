# Vitruvius
Elementary data structures in Solidity for Ethereum Smart Contracts.

### What is it?
Vitruvius is an integration-tested Solidity library that implements fundamental data structures in computing such as Linked Lists, Stacks, Queues, etc.  

### Data Structure Status

| Structure  | To Be Added | Not Tested | Undergoing Tests | Done |
| ------------- | :-----------: | :-----------: | :-----------: | :-----------: |
| Linked List  | [ ] | [ ] | [x] | [ ] |
| Stack  | [ ] | [ ] | [ ] | [x] |
| Queue  | [x] | [ ] | [ ] | [ ] |
| Tree  | [x] | [ ] | [ ] | [ ] |

### Why this?
The library exists, because smart contract development is hard. In addition to this, languages such as Solidity and the blockchains on which the code runs are very nascent. Because of this, Vitruvius aims to provide developers with safe, intuitive interfaces to add data structures to their contracts.  

Also, Vitruvius contracts can serve as proof-of-concepts for data structures in Solidity.

### Why not this?
Because these data structures are naturally complex, they're also naturally expensive, as more gas is required to operate on the structures. Therefore, it's extremely important to consider the cost of operating these contracts when including them in your decentralized application.

### Who uses it?
Nobody that [I](http://aunyks.com) know of uses Vitruvius at the moment. But, if you ever use Vitruvius contracts please let me know so that I can link to the project in place of this text!

### Why the name?
The Vitruvius library is named after Marcus *Vitruvius* Pollio, a Roman architect. He was one of the few who made structures, before they were cool. And, in a similar manner, this library aims to serve as an early foundation and/or reference for implementing data structures in Solidity.

### Donate
**0x037c241Baf5Ba2fa395db0Befac185e4E6b6608f**

## LICENSE
MIT License

Copyright (c) 2018 Gerald Nash

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.