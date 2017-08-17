function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

//左单旋
function roateLeft(node) {
  var rn = node.right;
  node.right = rn.left;
  rn.left = node;
  return rn;
}

//右单旋
function roateRight(node) {
  var ln = node.left;
  node.left = ln.right;
  ln.right = node;
  return ln;
}

//左右单旋
function roateLeftRight(AvlNode) {
  AvlNode.right = roateLeft(AvlNode.right); // 对右子节点做左单旋
  return roateRight(AvlNode); // 做右单旋
}

//右左单旋
function roateRightLeft(AvlNode) {
  AvlNode.left = roateRight(AvlNode.left); // 对左子节点做右单旋
  return roateLeft(AvlNode); // 做左单旋
}

//获得平衡树高度
function getAvlTreeHeight(node) {
  if (node == null) {
    return 0;
  } else {
    var leftHeight = getAvlTreeHeight(node.left);
    var rightHeight = getAvlTreeHeight(node.right);
    // 返回左子树、右子树中的最大高度
    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
  }
}

function balance(node) {
    if (node == null) {
        return node;
    }
    // 左子树高度比右子树高度大1以上
    if (getAvlTreeHeight(node.left) - getAvlTreeHeight(node.right) > 1) {
        if (getAvlTreeHeight(node.left.left) >= getAvlTreeHeight(node.left.right)) {
            // 如果左子树的左子树高度大于等于左子树的右子树高度
            // 直接进行右单旋
            node = roateRight(node);
        } else {
            // 否则需要右-左双旋
            node = roateRightLeft(node);
        }
        // 右子树高度比左子树高度大1以上
    } else if (getAvlTreeHeight(node.right) - getAvlTreeHeight(node.left) > 1) {
        if (getAvlTreeHeight(node.right.right) >= getAvlTreeHeight(node.right.left)) {
            // 如果右子树的右子树高度大于等于右子树的左子树高度
            // 直接进行左单旋
            node = roateLeft(node);
        } else {
            // 否则需要左-右双旋
            node = roateLeftRight(node);
        }
    }
    return node;
}

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
var n6 = new Node(6);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n6


console.log("====n1====="+JSON.stringify(n1));
console.log("====n0====="+JSON.stringify(balance(n1)));
