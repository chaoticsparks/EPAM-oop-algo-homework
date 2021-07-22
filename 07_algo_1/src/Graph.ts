export class Graph {
  constructor(private adjacencyMatrix: number[][]) {}

  getShortestDistances(startNode: number) {

    const shortestDistances = Array.from(
      { length: this.adjacencyMatrix.length },
      (arr, i) => i === startNode ? 0 : Number.MAX_VALUE
    );

    const visited: any = [];

    while (true) {

      let shortestIndex = shortestDistances.findIndex((shortestDistance, shortestNode) => {
        return shortestDistance < Number.MAX_VALUE && !visited[ shortestNode ];
      });

      if (shortestIndex === -1) {
        // There was no node not yet visited
        return shortestDistances;
      }

      let shortestDistance = shortestDistances[ shortestIndex ];

      console.log('Visiting node ' + shortestDistance + ' with current distance ' + shortestDistance);


      for (let i = 0; i < this.adjacencyMatrix[ shortestIndex ].length; i++) {
        if (this.adjacencyMatrix[ shortestIndex ][ i ] !== 0 && shortestDistances[ i ] > shortestDistances[ shortestIndex ] + this.adjacencyMatrix[ shortestIndex ][ i ]) {
          shortestDistances[ i ] = shortestDistances[ shortestIndex ] + this.adjacencyMatrix[ shortestIndex ][ i ];
          console.log('Updating distance of node ' + i + ' to ' + shortestDistances[ i ]);
        }
      }

      visited[ shortestIndex ] = true;
      console.log('Visited nodes: ' + visited);
      console.log('Currently lowest distances: ' + shortestDistances);

    }
  }
}
