/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import ReactDOM from "react-dom";
import TreeBox from "./TreeBox";

class Node {
  constructor(id, value, children = []) {
    this.id = id;
    this.value = value;
    this.children = children;
  }
}

const App = () => {
  const rootNode = new Node(1, "A", [
    new Node(2, "B", [new Node(3, "D"), new Node(4, "E")]),
    new Node(5, "C", [new Node(6, "F"), new Node(7, "G"), new Node(8, "H")])
  ]);

  return (
    <div>
      <TreeBox root={rootNode} selectedNodeIds={[1, 3, 5]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
