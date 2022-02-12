class Node {
  constructor(value) {
    this.node = value;
  }
}

class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.graph = new Map();
    this.table = new Map();
    this.visited = new Set();
    this.minPQ = new Map();
  }
  addNode(value) {
    // let node = new Node(value);
    this.graph.set(value, new Set());
  }

  addEdge(from, to, weight) {
    if (!this.graph.has(from)) {
      console.log("From value does not exist in graph");
      return;
    }
    if (!this.graph.has(to)) {
      console.log("To value does not exist in graph");
      return;
    }
    if (this.existingEdgeChecker(from, to)) {
      console.log("The edge already exists");
      return;
    }

    this.graph.forEach((value, key) => {
      if (key === from || key === to) {
        value.add(
          new Edge(key === from ? from : to, key === from ? to : from, weight)
        );
      }
    });
  }

  existingEdgeChecker(from, to) {
    let checker = false;
    this.graph.forEach((value, key) => {
      if (key === from || key === to) {
        value.forEach((value) => {
          if (
            (value.from === from || value.from === to) &&
            (value.to === from || value.to === to)
          )
            checker = true;
        });
      }
    });
    return checker;
  }

  findNode(nodeValue) {
    let returnValue = false;
    this.graph.forEach((value, key) => {
      if (key === nodeValue) returnValue = true;
    });
    return returnValue;
  }

  print() {
    console.log("Graph:", this.graph);
  }

  //-------------------dijkstra algorithm---------
  // this.table = new Map();
  // this.visited = new Set();
  // this.minPQ = new Set();

  getShortestDistance(initialNodeValue) {
    //checking if the initialNodeValue exists in graph
    if (!this.graph.has(initialNodeValue)) {
      console.log("this value does not exist in graph");
      return;
    }
    this.table = new Map();
    this.visited = new Set();
    this.minPQ = new Map();

    //setting table
    this.setTable(initialNodeValue);

    //setting initial value
    this.fillMinPQ(initialNodeValue);

    //recurssion
    this.findShortestDistance();

    //printing table
    this.printTable();
  }

  setTable(nodeValue) {
    this.graph.forEach((value, key) => {
      this.table.set(key, {
        totalCost: key === nodeValue ? 0 : Infinity,
        previousNode: key === nodeValue ? key : null,
      });
    });
  }

  findShortestDistance() {
    //base condition
    if (!this.minPQ.size) return;

    let neighbours;
    let currentNode = this.setCurrentNode(); //O(minPQ)

    //getting all neighbours
    neighbours = this.graph.get(currentNode.key);

    //adding visited and removing current value from minPQ
    this.visited.add(currentNode.key); //memoization
    this.minPQ.delete(currentNode.key);

    //checking in table if the distance is less, if so, its updating
    //O(neightbours)
    neighbours.forEach((val) => {
      if (
        !this.visited.has(val.to) &&
        val.weight + currentNode.priority < this.table.get(val.to).totalCost //important code. (val.weight + currentNode.priority)
      )
        this.table.set(val.to, {
          totalCost: val.weight + currentNode.priority,
          previousNode: currentNode.key,
        });
    });

    //adding neighbours to minPQ
    //O(neighbours)
    neighbours.forEach(
      (val) => (this.visited.has(val.to) ? "" : this.fillMinPQ(val.to)) //memoization
    );

    //re - iterate
    this.findShortestDistance();
  }

  setCurrentNode() {
    let currentNode = { key: undefined, priority: Infinity };
    this.minPQ.forEach((value, key) =>
      value < currentNode.priority
        ? (currentNode = { key: key, priority: value })
        : ""
    );
    return currentNode;
  }

  fillMinPQ(nodeValue) {
    let nodeItem = this.table.get(nodeValue);
    this.minPQ.set(nodeValue, nodeItem.totalCost);
  }

  printTable() {
    console.log("Table:", this.table);
  }

  getShortestPath(from, to) {
    if (!this.table.has(from) || !this.table.has(to)) {
      console.log("From or To doesn't exist in graph");
      return;
    }
    let node = from;
    let path = [];
    let previousNode;

    while (node !== to) {
      previousNode = node;
      path.push(node);
      path.push("->");
      node = this.table.get(node).previousNode;
    }
    path.push(to);
    let totalDistance =
      this.table.get(from).totalCost - this.table.get(to).totalCost;
    console.log(
      "Path:",
      path.toString().replace(/,/g, " "),
      "| Distance:",
      totalDistance
    );
  }
}

let graph = new WeightedGraph();
graph.addNode("sf");
graph.addNode("seattle");
graph.addNode("idaho");
graph.addNode("chicago");
graph.addNode("nyc");
graph.addEdge("sf", "seattle", 3);
graph.addEdge("chicago", "seattle", 2);
graph.addEdge("seattle", "idaho", 1);
graph.addEdge("idaho", "sf", 5);
graph.addEdge("idaho", "nyc", 6);
graph.addEdge("idaho", "chicago", 3);
graph.addEdge("chicago", "nyc", 4);
// graph.print();
graph.getShortestDistance("sf");
// graph.printTable();
graph.getShortestPath("nyc", "sf");
