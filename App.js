/* @jsx jsx */
import { css, jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import TreeBox from "./components/TreeBox";
import Node from "./models/Node";
import Tree from "./models/Tree";

const App = () => {
  const root = new Node("A");
  const nodeB = root.add("B");
  nodeB.add("D");
  nodeB.add("E");
  const nodeC = root.add("C");
  nodeC.add("F");
  nodeC.add("G");
  nodeC.add("H");

  const tree = new Tree(root);

  return (
    <div>
      <TreeBox tree={tree} />
    </div>
  );
};

export default App;
