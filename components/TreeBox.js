/* @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Graph from "react-graph-vis";

const getGraph = node => {
  let nodes = [];
  const rootNode = { id: node.id, label: node.value, title: node.value };
  const childrenNodes = node.children.reduce(
    (prev, childNode) => {
      const childGraph = getGraph(childNode);
      const childEdge = { from: rootNode.id, to: childNode.id };
      return {
        nodes: [].concat(prev.nodes, childGraph.nodes),
        edges: [].concat(prev.edges, childGraph.edges, childEdge)
      };
    },
    { nodes: [], edges: [] }
  );
  return {
    nodes: nodes.concat(rootNode, childrenNodes.nodes),
    edges: childrenNodes.edges
  };
};

const TreeBox = ({ tree }) => {
  const graph = getGraph(tree.root);

  const options = {
    autoResize: true,
    height: "500px",
    width: "100%",
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed"
      }
    },
    nodes: {
      color: {
        border: "#333",
        background: "#bbb",
        highlight: {
          border: "#2B7CE9",
          background: "#97C2FC"
        }
      }
    },
    interaction: {
      selectable: false
    }
  };

  const [network, setNetwork] = React.useState(null);

  React.useEffect(() => {
    if (network) {
      network.selectNodes(tree.visited, false);
    }
  }, [network, tree.visited]);

  return (
    <article>
      <Graph graph={graph} options={options} getNetwork={setNetwork} />
    </article>
  );
};

export default TreeBox;
