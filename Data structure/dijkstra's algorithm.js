class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.sort()
    }

    dequeue() {
        this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        if (this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2)) {
            this.adjacencyList[v1].push({node: v2, weight})
            this.adjacencyList[v2].push({node: v1, weight})
            return true
        } else { 
            throw Error("vertex is not in thier")
        }    
    }

    Dijkstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = [];
        const previous = {}
        let smallest;
        // build initial state 
        for (const vertex in this.adjacencyList) {
            if (this.adjacencyList.hasOwnProperty.call(this.adjacencyList, vertex)) {
                if (vertex === start) {
                    distances[vertex] = 0
                    nodes.enqueue(vertex, 0)
                } else {
                    distances[vertex] = Infinity;
                    nodes.enqueue(vertex, Infinity)
               }
                previous[vertex] = null
            }
        }
        // as long as there is something to visit 
        while (nodes.values.length) {
            smallest = nodes.dequeue()
            if (smallest === end) {
                //Wea are done
                //Build up path to return at end
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList) {
                    let nextNode;
                    console.log(neighbor)
                    console.log(this.adjacencyList)
                }
            }
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList.hasOwnProperty(v1) && this.adjacencyList.hasOwnProperty(v2)) { 
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v.node !== v2)
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v.node !== v1)
        }
    }

    removeVertex(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    // reecursively
    depthFirstRecursively(start) {
        const result = []
        let visited = {}
        const adjacencyList = this.adjacencyList
            
        function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start);

        return result
    }
    // itrative
    depthFirstIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let currentVertex
        while (stack.length) {
            currentVertex = stack.pop()
            visited[currentVertex] = true
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.node] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    breathFirstSearch(start) {
        const result = [];
        const queue = [start]
        const visited = {}
        let currentVertex;
        while (queue.length) {
            currentVertex = queue.shift()
            visited[currentVertex] = true
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.nodee] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
}

let g = new WeightedGraph() 
g.addVertex("A") 
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)

g.Dijkstra("A", "E")