class Node {
  constructor(value, children = []) {
    this.id = Node.currentId;
    this.value = value;
    this._children = children;
    Node.currentId += 1;
  }

  get children() {
    return this._children;
  }

  add(value) {
    const child = new Node(value);
    this._children.push(child);
    return child;
  }
}

Node.currentId = 1;

export default Node;
