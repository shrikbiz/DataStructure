class Graph {
  constructor() {
    this.graph = new Map();
  }

  insert(value) {
    if (this.graph.has(value)) return console.log(`${value} already exists`);
    this.graph.set(value, new Set());
  }

  addEdges(from, to) {
    if (!this.graph.has(from) || !this.graph.has(to))
      return console.log(`${to} or ${from} is not a vertex`);
    if (this.graph.has(from) && !this.graph.get(from).has(to)) {
      this.graph.get(from).add(to);
    } else console.log(to, "is already connected to", from);
  }

  print() {
    this.graph.forEach((values, key) => {
      let vertex = [];
      values.forEach((val) => vertex.push(val));
      vertex = vertex.length ? vertex : "nothing";
      console.log(key, "is connected to", vertex);
    });
  }

  remove(value) {
    if (!this.graph.has(value)) {
      console.log(value, "does not exist in graph");
      return;
    }
    this.graph.delete(value);
    this.graph.forEach((val, key) => {
      if (val.has(value)) val.delete(value);
    });
  }

  removeEdge(from, to) {
    if (!this.graph.has(from) || !this.graph.has(to)) return;
    if (this.graph.get(from).has(to)) this.graph.get(from).delete(to);
  }

  traversal(value) {
    if (!this.graph.has(value)) return;
    let connection = [];
    let visited = new Set(value);
    this.graph.get(value).forEach((val) => connection.push(val));
    this.bft(connection, this.graph, visited);
    console.log("bft:", visited);
    visited = new Set(value);
    this.dft(connection, this.graph, visited);
    console.log("dft:", visited);
  }

  bft(connection, graph, visited) {
    if (!connection.length) return;
    connection.forEach((val) => visited.add(val));
    for (let value of connection) {
      let vertex = [];
      graph
        .get(value)
        .forEach((val) => (!visited.has(val) ? vertex.push(val) : vertex));
      this.bft(vertex, graph, visited);
    }
  }

  dft(connection, graph, visited) {
    if (!connection.length) return;
    for (let value of connection) {
      visited.add(value);
      let vertex = [];
      graph
        .get(value)
        .forEach((val) => (!visited.has(val) ? vertex.push(val) : vertex));
      this.bft(vertex, graph, visited);
    }
  }
}

let graph = new Graph();

graph.insert("A");
graph.insert("B");
graph.insert("C");
graph.insert("D");
graph.insert("E");

graph.addEdges("A", "B");
graph.addEdges("A", "E");
graph.addEdges("B", "E");
graph.addEdges("C", "A");
graph.addEdges("C", "B");
graph.addEdges("C", "D");
graph.addEdges("D", "E");
graph.traversal("C");
// graph.print();
