class Vertex {
  constructor(label) {
    this.vertex = [label];
  }
}

class Graph {
  constructor() {
    this.graph = new Map();
  }

  insert(value) {
    if (this.graph.has(value)) return "this value already exists";
    this.graph.set(value);
  }

  addEdges(from, to) {
    if (!this.graph.has(from) || !this.graph.has(to))
      return "to and from not correct";
    if (this.graph.has(from)) {
      this.graph.set(from, new Vertex(to));
    }
    console.log(this.graph);
  }

  print() {
    this.graph.forEach((values, key) => {
      console.log(`${key} is ${typeof values}`);
    });
  }
}

let graph = new Graph();

graph.insert(1);
graph.insert(2);
graph.insert(3);
graph.insert(6);

graph.addEdges(1, 6);
graph.addEdges(6, 3);

graph.addEdges(1, 2);

graph.print();
