const {TreeNode} = require('./TreeNode.js');

function insert(val, currentNode, prevNode = null, direction = null) {
  if (currentNode === undefined) {
    prevNode[direction] = new TreeNode(val);
  } else if (val < currentNode.value) {
    insert(val, currentNode.left, currentNode, 'left');
  } else if (val > currentNode.value) {
    insert(val, currentNode.right, currentNode, 'right');
  } else if (val === currentNode.value) {
    currentNode.times++;
  }
}

module.exports = {insert}
