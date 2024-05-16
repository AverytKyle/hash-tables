class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let index = this.hashMod(key)
    let currPair = this.data[index]

    while (currPair && currPair.key !== key) {
      currPair = currPair.next
    }
    if (currPair) {
      currPair.value = value
    } else {
      let newPair = new KeyValuePair(key, value)
      newPair.next = this.data[index]
      this.data[index] = newPair
      this.count++
    }
  }


  read(key) {
    let index = this.hashMod(key)
    let currPair = this.data[index]
    
    while(currPair) {
      if(currPair.key === key) {
        return currPair.value
      }
      currPair = currPair.next
    }
    return undefined
  }


  resize() {
    // Your code here 
  }


  delete(key) {
    // Your code here 
  }
}
let hashTable = new HashTable(2)

// hashTable.insert("key1", "value1")
//     hashTable.insert("key2", "value2")
//     hashTable.insert("key3", "value3")
//     hashTable.insert("key5", "value5")
//     hashTable.insert("key9", "value9")
//     hashTable.insert("key10", "value10")

  // console.log(hashTable.data[0].next)

module.exports = HashTable;
