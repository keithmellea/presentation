
// Given a binary tree, find the ancestors of the node of a particular value.
// Root will be a root node of a binary search tree and `k` is an integer value of
// a node whose ancestors you will need to find.

// Example:
// findAncestors(6, 10) => [6, 9, 12]
// ```js
//   //   6
//   //  / \
//   // 4   9
//   //   /  \
//   //  8   12
//   //      / \
//   //     10  14

//recursive
//depth-first traversal, capturing nodes travelled on the way down in an array
//exclude 'k'/the destination value
//return array
//if we find the target, finish the recursion and go to the self
//push out previous self nodes
//if target is less than root, only search left side
//if conditionals checking if next value is < or > target value
//recursively call the next value params based on those conditions
//base case: if root.val is our target, then return array
//pre-order traversal

/*
  iterate using a while

  let arr = []

  while root.val !== dest {

    arr.push(root.val);

    if(root.val === dest) {
      root = root.left;
    } else {  
      root = root.right;
    }
  }
  
  return arr;
*/

function findAncestors(root, dest) {
  let arr = []

  if(!root) return arr;

  while(root.val !== dest ) {

    arr.push(root.val);

    if(root.val > dest) {
      root = root.left;
    } else {  
      root = root.right;
    }
    
  }
  
  return arr;
}

// function findAncestors(root, dest, arr = []) {
//   if(root.val === dest) return arr;

//   arr.push(root.val);

//   if(root.val > dest) {
//     return findAncestors(root.left, dest, arr);
//   } else {
//     return findAncestors(root.right, dest, arr);
//   }

// }

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function testTree(){
  let six = new TreeNode(6);
  let four = new TreeNode(4);
  let nine = new TreeNode(9);
  let eight = new TreeNode(8);
  let twelve = new TreeNode(12);
  let ten = new TreeNode(10);
  let fourteen = new TreeNode(14);
  
  six.left = four;
  six.right = nine;
  nine.left = eight;
  nine.right = twelve;
  twelve.left = ten;
  twelve.right = fourteen;

  return six;
}

let root = testTree();

console.log(findAncestors(root,10))

// function constructUnbalancedTree(){
//   let h = new TreeNode('h');
//   let i = new TreeNode('i');
//   let j = new TreeNode('j');
//   let k = new TreeNode('k');
//   let l = new TreeNode('l');
//   let m = new TreeNode('m');

//   h.left = i;
//   h.right = k;
//   i.right = j;
//   k.left = l;
//   l.right = m;

//   return h;
// }