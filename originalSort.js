const {TreeNode} = require('./TreeNode')
const {insert} = require('./insert')


function hashSort(arr) {
  let pointer = 0; //Pointer for reasigning the original array's values. Starts at Idx 0.
  const hash = new Array(arr.length * 2); //Temporary array for sorting nums. Double the length of the original array.
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) { // Loop for getting the lowest and highest values as well as the sum of all values.
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max){
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) { // loops thru the original array and adds each element to a bucket in 'hash' array.
    const element = arr[i];
    const insertIdx = Math.floor( ((hash.length-1 - 0) / (max - min)) * (element - min) ); // Maps the range from min and max to the 'hash' array length and finds proper 'insert index' for element.

    if(hash[insertIdx] === undefined) { // if 'hash' at Insert Idx is empty
      hash[insertIdx] = new TreeNode(element); // Insert the element into the empty idx.
    } else {
      insert(element, hash[insertIdx]); // else do a BST insertion on the node at the insert Idx.
    }
  }

  hash.forEach(node => { // Loops thru the 'hash' array.
    if(node !== undefined) { // If there is an element
      let stack = [node];
      let current = node.left;

      while(current !== undefined || stack.length) { //Does an in order traversal of the BST node and reasigns the old array to the sorted values.
        if(current) {
          stack.push(current);
          current = current.left;

        } else {
          current = stack.pop();
          while(current.times){
            arr[pointer] = current.value;
            current.times--;
            pointer++;
          }

            current = current.right;
          }
      }
    }
  });

  return arr;
}

module.exports = {hashSort}
