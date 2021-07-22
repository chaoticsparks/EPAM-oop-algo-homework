import { Graph } from './src/Graph';


const adjacencyMatrix = [
  [0, 1, 0, 4, 3],
  [1, 0, 0, 2, 0],
  [0, 0, 0, 1, 5],
  [4, 2, 1, 0, 3],
  [3, 0, 5, 3, 0]
];

const graph = new Graph(adjacencyMatrix);

console.log(graph.getShortestDistances(1))
