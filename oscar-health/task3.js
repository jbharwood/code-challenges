class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    }
    else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          // go left

          if (current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(value);
            break;
          }
        }
        else {
          // go right
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }

  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }

  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}

// let tree = new Tree()
// tree.add(8)
// tree.add(3)
// tree.add(10)
// tree.add(1)
// tree.add(6)
// tree.add(4)
// tree.add(7)
// tree.add(14)
// tree.add(13)
// console.log(tree.toObject());
// console.log(tree.toJSON());

function solution(T) {
    let hash = {}
    let max = 0;

    function helper(node) {
        if (!node) {
          return 0;
        }
        hash[node] = node
        let left = helper(node.l);
        let right = helper(node.r);

        if (node.l === hash[node.l]) {
          left += node.l.val === node.val ? 1 : -left;
        }

        if (node.r === hash[node]) {
          right += node.r.val === node.val ? 1 : -right;
        }

        max = Math.max(max, left + right + 1);

        return Math.max(left, right);
    };

    helper(T);
    return max;
}

const nums = [1,2,3,2,6,3,3,1,5,6];
// const nums = [8,3,10,1,6,4,7,14,13];
const tree = new Tree();
nums.map( num => tree.add(num));
console.log(tree.toJSON());
// console.log(tree.toObject());
// tree = (1, (2, (3, (2, 0, 0), 0), (6, 0, 0)), (3, (3, 0, 0), (1, (5, 0, 0), (6, 0, 0))))
// console.log(solution(tree))
// console.log(solution((1, (2, (3, (2, 0, 0), 0), (6, 0, 0)), (3, (3, 0, 0), (1, (5, 0, 0), (6, 0, 0))))))
console.log(solution((1, (2, (3, (2, null, null), null), (6, null, null)), (3, (3, null, null), (1, (5, null, null), (6, null, null))))));
